import {
  Body,
  Controller,
  Post,
  Get,
  ParseIntPipe,
  Param,
  BadRequestException,
  NotFoundException,
  Patch,
} from '@nestjs/common';
import { Equipo1Dto } from './dto/Equipo1.dto';
import { Equipo1Service } from './Equipo1.services';
import { Equipo1UpdateDto } from './dto/Equipo1Update';
@Controller('Equipo1')
export class Equipo1Controller {
  constructor(private Equipo1service: Equipo1Service) {}

  @Post()
  async create(@Body() createGrupoJugadorDto: Equipo1Dto) {
    return this.Equipo1service.AgregarJugador(createGrupoJugadorDto);
  }

  @Patch(':id')
  async updateGrupo(
    @Param('id', ParseIntPipe) id: number,
    @Body() grupoXJugador: Equipo1UpdateDto,
  ) {
    try {
      await this.Equipo1service.UpdateGrupoXJugador(id, grupoXJugador);
      return { message: 'Grupo actualizado exitosamente' };
    } catch (error) {
      throw new BadRequestException('Error al actualizar el grupo');
    }
  }

  @Get(':idGrupo')
  async getGrupoJugadores(@Param('idGrupo', ParseIntPipe) idGrupo: number) {
    try {
      const { idGrupo: grupo, jugadores } =
        await this.Equipo1service.getGrupoJugadores(idGrupo);
      return { grupo, jugadores };
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw new BadRequestException(error.message);
      }
      throw new BadRequestException(
        'Error al obtener el registro de JugadorXGrupo',
      );
    }
  }
}

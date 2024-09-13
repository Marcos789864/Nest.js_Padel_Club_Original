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
import { Equipo2Dto } from './dto/Equipo2.dto';
import { Equipo2Service } from './Equipo2.services';
import { Equipo2UpdateDto } from './dto/Equipo2Update';
@Controller('Equipo2')
export class Equipo2Controller {
  constructor(private Equipo2service: Equipo2Service) {}

  @Post()
  async create(@Body() createGrupoJugadorDto: Equipo2Dto) {
    return this.Equipo2service.AgregarJugador(createGrupoJugadorDto);
  }

  @Patch(':id')
  async updateGrupo(
    @Param('id', ParseIntPipe) id: number,
    @Body() grupoXJugador: Equipo2UpdateDto,
  ) {
    try {
      await this.Equipo2service.UpdateGrupoXJugador(id, grupoXJugador);
      return { message: 'Grupo actualizado exitosamente' };
    } catch (error) {
      throw new BadRequestException('Error al actualizar el grupo');
    }
  }

  @Get(':idGrupo')
  async getGrupoJugadores(@Param('idGrupo', ParseIntPipe) idGrupo: number) {
    try {
      const { idGrupo: grupo, jugadores } =
        await this.Equipo2service.getGrupoJugadores(idGrupo);
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

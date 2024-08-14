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
import { GrupoXJugadorDto } from './dto/GrupoXJugador.dto';
import { GrupoXJugadorService } from './GrupoXJugador.service';
import { GrupoXJugadorUpdateDto } from './dto/GrupoXJugadorUpdate.dto';
@Controller('GrupoXJugador')
export class GrupoXJugadorController {
  constructor(private GrupoXjugadorService: GrupoXJugadorService) {}

  @Post()
  async create(@Body() createGrupoJugadorDto: GrupoXJugadorDto) {
    return this.GrupoXjugadorService.AgregarJugador(createGrupoJugadorDto);
  }

  @Patch(':id')
  async updateGrupo(
    @Param('id', ParseIntPipe) id: number,
    @Body() grupoXJugador: GrupoXJugadorUpdateDto,
  ) {
    try {
      await this.GrupoXjugadorService.UpdateGrupoXJugador(id, grupoXJugador);
      return { message: 'Grupo actualizado exitosamente' };
    } catch (error) {
      throw new BadRequestException('Error al actualizar el grupo');
    }
  }

  @Get(':idGrupo')
  async getGrupoJugadores(@Param('idGrupo', ParseIntPipe) idGrupo: number) {
    try {
      const { idGrupo: grupo, jugadores } =
        await this.GrupoXjugadorService.getGrupoJugadores(idGrupo);

      // Devuelve las propiedades correctas
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

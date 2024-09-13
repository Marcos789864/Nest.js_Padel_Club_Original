import {
  Controller,
  Get,
  ParseIntPipe,
  Param,
  Post,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';

import { GrupoXJugadorService } from './GrupoXJugador.services';

@Controller('GrupoXJugador')
export class GrupoXJugadorController {
  constructor(private GrupoXjugadorService: GrupoXJugadorService) {}

  @Post(':id')
  async crearGrupoConEquipos(@Param('id', ParseIntPipe) idJugador: number) {
    console.log(`ID del jugador recibido: ${idJugador}`);
    return this.GrupoXjugadorService.crearGrupoConEquipos(idJugador);
  }

  @Get(':idGrupo')
  async getGrupoJugadores(@Param('idGrupo', ParseIntPipe) idGrupo: number) {
    try {
      const { idGrupo: grupo } =
        await this.GrupoXjugadorService.getIdGrupoForEquipo(idGrupo);
      return { grupo };
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

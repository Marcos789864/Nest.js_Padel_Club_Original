import {
  Body,
  Controller,
  Post,
  Get,
  ParseIntPipe,
  Param,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { PartidoDto } from './dto/PartidoDto';
import { PartidoService } from './Partido.service';

@Controller('GrupoXJugador')
export class PartidoController {
  constructor(private partidoService: PartidoService) {}

  @Post()
  async create(@Body() createPartidoDto: PartidoDto) {
    return this.partidoService.CreatePartido(createPartidoDto);
  }

  @Get(':idGrupo')
  async getGrupoJugadores(@Param('idGrupo', ParseIntPipe) idGrupo: number) {
    try {
      const { idGrupo: grupo, jugadores } =
        await this.partidoService.getGrupoJugadores(idGrupo);

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

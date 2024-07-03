import { Body, Controller, Post, Get, ParseIntPipe, Param, BadRequestException, NotFoundException, Patch } from '@nestjs/common';
import { GrupoXJugadorDto } from './dto/GrupoXJugador.dto';
import { GrupoXJugadorService } from './GrupoXJugador.service';
import { GrupoXJugadorUpdateDto } from './dto/GrupoXJugadorUpdate.dto';
@Controller('GrupoXJugador')
export class GrupoXJugadorController {
  constructor(private GrupojugadorService: GrupoXJugadorService) {}

  @Post()
  async create(@Body() createGrupoJugadorDto: GrupoXJugadorDto) {
    return this.GrupojugadorService.AgregarJugador(createGrupoJugadorDto);
  }

  @Patch(":id")
  async updateGrupo( @Param('id', ParseIntPipe) id: number,
  @Body() GrupoXJugador: GrupoXJugadorUpdateDto,)
  {
    return this.GrupojugadorService.UpdateGrupoXJugador(id, GrupoXJugador);
  }

  @Get(':idGrupo')
  async getGrupoJugadores(@Param('idGrupo') idGrupo: number) {
    try {
      const { grupo, jugadores } = await this.GrupojugadorService.getGrupoJugadores(idGrupo);
      return { grupo, jugadores };
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw new BadRequestException(error.message);
      }
      throw new BadRequestException('Error al obtener el registro de JugadorXGrupo');
    }
  }
}

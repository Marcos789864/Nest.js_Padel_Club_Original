import { Body, Controller, Post, Get, ParseIntPipe } from '@nestjs/common';
import { GrupoXJugadorDto } from './dto/GrupoXJugador.dto';
import { GrupoXJugadorService } from './GrupoXJugador.service';
@Controller('GrupoXJugador')
export class GrupoXJugadorController {
  constructor(private GrupojugadorService: GrupoXJugadorService) {}

  @Post()
  async create(@Body() createGrupoJugadorDto: GrupoXJugadorDto) {
    return this.GrupojugadorService.AgregarJugador(createGrupoJugadorDto);
  }

  @Get(':id')
  async BuscarJugador(@Param('id', ParseIntPipe) id: number) {
    return this.GrupojugadorService.MostrarJugadores();
  }
}

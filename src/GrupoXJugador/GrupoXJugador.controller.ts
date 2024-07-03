import { Body, Controller, Post, Get } from '@nestjs/common';
import { GrupoXJugadorDto } from './dto/GrupoXJugador.dto';
import { GrupoXJugadorService } from './GrupoXJugador.service';
@Controller('GrupoJugador')
export class GrupoXJugadorController {
  constructor(private GrupojugadorService: GrupoXJugadorService) {}

  @Post()
  async create(@Body() createGrupoJugadorDto: GrupoXJugadorDto) {
    return this.GrupojugadorService.AgregarJugador(createGrupoJugadorDto);
  }

  @Get()
  async BuscarJugador() {
    return this.GrupojugadorService.MostrarJugadores();
  }
}

import { Body, Controller, Post, Get } from '@nestjs/common';
import { GrupoJugadorDto } from './dto/GrupoJugadorDTO';
import { GrupoJugadorService } from './GrupoJugador.service';
@Controller('GrupoJugador')
export class GrupoJugadorController {
  constructor(private GrupojugadorService: GrupoJugadorService) {}

  @Post()
  async create(@Body() createGrupoJugadorDto: GrupoJugadorDto) {
    return this.GrupojugadorService.CreateGrupo(createGrupoJugadorDto);
  }

  @Get()
  async BuscarJugador() {
    return this.GrupojugadorService.GetJugadoresGrupo();
  }
}

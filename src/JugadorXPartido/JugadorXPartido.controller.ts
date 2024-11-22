import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/auth.guard';
import { JugadorXPartidoService } from './JugadorXPartido.services';
import { JugadorXPartidoDto } from './dto/JugadorXPartido';

@Controller('JugadorXPartido')
export class JugadorXPartidoController {
  constructor(private jugadorXPartidoServices: JugadorXPartidoService) {}
  @UseGuards(AuthGuard)
  @Post()
  async create(@Body() JugadorXPartido: JugadorXPartidoDto) {
    return this.jugadorXPartidoServices.Create(JugadorXPartido);
  }
  @UseGuards(AuthGuard)
  @Get(':idPartido')
  async ObtenerJugadorPorPartido(@Param('idPartido') idPartido: number) {
    return this.jugadorXPartidoServices.ObtenerJugadoresXPartido(idPartido);
  }
}

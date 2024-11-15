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
  @Get(':idJugador')
  async ObtenerMensajePorTipo(@Param('Tipo') idJugador: number) {
    return this.jugadorXPartidoServices.ObtenerJugadoresXPartido(idJugador);
  }
}

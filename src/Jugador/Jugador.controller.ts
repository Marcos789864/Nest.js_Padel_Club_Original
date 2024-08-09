import {
  Body,
  Controller,
  Get,
  Patch,
  Param,
  ParseIntPipe,
  UseGuards,
} from '@nestjs/common';
import { JugadorService } from './Jugador.services';
import { updateJugadorDto } from './dto/updateJugador.dto';
import { AuthGuard } from 'src/auth.guard';

@Controller('Jugador')
export class JugadorController {
  constructor(private jugadorService: JugadorService) {}

  @UseGuards(AuthGuard)
  @Get()
  async BuscarJugador() {
    return this.jugadorService.GetJugadores();
  }
  @UseGuards(AuthGuard)
  @Patch(':id')
  async updateJugador(
    @Param('id', ParseIntPipe) id: number,
    @Body() jugador: updateJugadorDto,
  ) {
    return this.jugadorService.UpdateJugador(id, jugador);
  }
  @UseGuards(AuthGuard)
  @Get(':id')
  async GetJugadorById(@Param('id', ParseIntPipe) id: number) {
    return this.jugadorService.GetJugadorById(id);
  }
}

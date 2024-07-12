import {
  Body,
  Controller,
  Get,
  Patch,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { JugadorService } from './Jugador.services';
import { updateJugadorDto } from './dto/updateJugador.dto';

@Controller('Jugador')
export class JugadorController {
  constructor(private jugadorService: JugadorService) {}

  @Get()
  async BuscarJugador() {
    return this.jugadorService.GetJugadores();
  }

  @Patch(':id')
  async updateJugador(
    @Param('id', ParseIntPipe) id: number,
    @Body() jugador: updateJugadorDto,
  ) {
    return this.jugadorService.UpdateJugador(id, jugador);
  }

  @Get(':id')
  async GetJugadorById(@Param('id', ParseIntPipe) id: number) {
    return this.jugadorService.GetJugadorById(id);
  }
}

import {
  Body,
  Controller,
  Get,
  Patch,
  Post,
  Param,
  ParseIntPipe,
  UseGuards,
} from '@nestjs/common';
import { JugadorService } from './Jugador.services';
import { updateJugadorDto } from './dto/updateJugador.dto';
import { AuthGuard } from 'src/auth.guard';
import { eloDto } from './dto/eloDto';

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
  @UseGuards(AuthGuard)
  @Post('elo')
  async CalcularEloJugadores(@Body infoElo:eloDto )
  {

  }

  private calcularKFactor = (cantPartidos) => {
    if (cantPartidos <= 5) return 200;
    if (cantPartidos <= 15) return 150;
    return 100;
  };
  private procesarSets = (sets) => {
    let setsValidos = 0;
    let games1 = 0;
    let games2 = 0;
    sets.forEach((set) => {
      if (set !== 0) {
        const [p1, p2] = set.map(Number);
        games1 += p1;
        games2 += p2;
        setsValidos++;
      }
    });
    const diferencia = Math.abs(games1 - games2);
    const pors = 1 + (diferencia / setsValidos) * 0.07;
    return pors;
  };
}

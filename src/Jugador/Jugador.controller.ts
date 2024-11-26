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
  async CalcularEloJugadores(@Body() infoElo: eloDto) {
    console.log('Entro en calcular elo' + JSON.stringify(infoElo, null, 2));
    console.log('infoElo1' + JSON.stringify(infoElo[0], null, 2));
    console.log('infoElo2' + JSON.stringify(infoElo[1], null, 2));
    console.log('infoElo3' + JSON.stringify(infoElo[2], null, 2));
    console.log('infoElo4' + JSON.stringify(infoElo[3], null, 2));
    console.log('infoElo5' + JSON.stringify(infoElo[4], null, 2));
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

  private calcularE = (eloJugador, eloOponente) => {
    return 1 / (1 + Math.pow(10, (eloOponente - eloJugador) / 600));
  };
}

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
  async CalcularEloJugadores( @Body() infoElo: eloDto) {
    console.log('Datos recibidos:', JSON.stringify(infoElo, null, 2));
    const grupo1 = infoElo[0];
    const grupo2 = infoElo[1];
    const resultadosSets = infoElo[4];
    console.log('Grupo 1:', grupo1);
    console.log('Grupo 2:', grupo2);
    const equipo1PuntosTotales = (grupo1[0].Puntos+ grupo1[1].Puntos) / grupo1.length;
    const equipo2PuntosTotales = (grupo2[0].Puntos + grupo2[1].Puntos) / grupo2.length;
    let setsGanadosEquipo1 = 0;
  let setsGanadosEquipo2 = 0;

  resultadosSets.forEach((set) => {
    if (set !== 0) {
      const [p1, p2] = set.map(Number);
      if (p1 > p2) {
        setsGanadosEquipo1++;
      } else if (p2 > p1) {
        setsGanadosEquipo2++;
      }
    }
  });


  const esGanadorEquipo1 = setsGanadosEquipo1 > setsGanadosEquipo2;

 
  const R = this.procesarSets(resultadosSets);


  const E1 = this.calcularE(equipo1PuntosTotales, equipo2PuntosTotales);
  const E2 = this.calcularE(equipo2PuntosTotales, equipo1PuntosTotales);


  const nuevosPuntosGrupo1 = grupo1.map((jugador) => {
    const kFactor = this.calcularKFactor(jugador.Cant_Partidos);
    const delta = kFactor * ((esGanadorEquipo1 ? 1 : 0) - E1) * R;
    const nuevosPuntos = Math.ceil(jugador.Puntos + delta);
    return { ...jugador, nuevosPuntos };
  });

  const nuevosPuntosGrupo2 = grupo2.map((jugador) => {
    const kFactor = this.calcularKFactor(jugador.Cant_Partidos);
    const delta = kFactor * ((esGanadorEquipo1 ? 0 : 1) - E2) * R;
    const nuevosPuntos = Math.ceil(jugador.Puntos + delta);
    return { ...jugador, nuevosPuntos };
  });

  const jugadoresActualizados = [...nuevosPuntosGrupo1, ...nuevosPuntosGrupo2];

  await Promise.all(
    jugadoresActualizados.map((jugador) =>
      this.updateJugador(jugador.id, { Puntos: jugador.nuevosPuntos }),
    )
  );

  console.log('Puntos actualizados:', jugadoresActualizados);

  return {
    grupo1: nuevosPuntosGrupo1,
    grupo2: nuevosPuntosGrupo2,
    ganador: esGanadorEquipo1 ? "Equipo 1" : "Equipo 2",
  };
  }

  private calcularKFactor(cantPartidos: number): number {
    if (cantPartidos <= 5) return 200;
    if (cantPartidos <= 15) return 150;
    return 100;
  }

  private procesarSets(sets: any[]): number {
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
  }

  private calcularE(eloJugador: number, eloOponente: number): number {
    return 1 / (1 + Math.pow(10, (eloOponente - eloJugador) / 600));
  }
}

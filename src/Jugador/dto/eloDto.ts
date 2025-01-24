import { Jugador } from '../Jugador.entity';

export class eloDto {
  jugadoresEquipo1: [Jugador];
  jugadoresEquipo2: [Jugador];
  puntajeEquipo1: number;
  puntajeEquipo2: number;
  numeroSets: number;
}

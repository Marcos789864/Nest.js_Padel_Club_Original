import { RangoJugador, Club } from '../Jugador.entity';
export class updateJugadorDto {
  Nombre?: string;
  Foto?: string;
  Puntos?: number;
  Contraseña?: string;
  Gmail?: string;
  Rango?: RangoJugador;
  Club?: Club;
}

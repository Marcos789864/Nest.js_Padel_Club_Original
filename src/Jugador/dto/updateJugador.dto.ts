import { RangoJugador, Club } from '../Jugador.entity';
export class updateJugadorDto {
  Nombre?: string;
  Foto?: string;
  Puntos?: number;
  Contraseña?: string;
  Amigos?: string;
  Gmail?: string;
  Apellido?: string;
  idPartido?: number;
  Rango?: RangoJugador;
  IdGrupo?: number;
  Club?: Club;
}

import { IsEmail, IsNotEmpty, IsString, IsNumber, IsIn } from 'class-validator';
import { RangoJugador } from '../Jugador.entity';
export class JugadorDto {
  @IsNotEmpty()
  @IsString()
  Nombre: string;
  @IsString()
  Foto?: string;
  @IsNotEmpty()
  @IsNumber()
  Puntos: number;
  @IsNotEmpty()
  @IsString()
  Contraseña: string;
  Amigos?: string[];
  id_partidos: null;
  @IsNotEmpty()
  @IsIn([
    RangoJugador.Bronce1,
    RangoJugador.Bronce2,
    RangoJugador.Bronce3,
    RangoJugador.Plata1,
    RangoJugador.Plata2,
    RangoJugador.Plata3,
    RangoJugador.Oro1,
    RangoJugador.Oro2,
    RangoJugador.Oro3,
    RangoJugador.Diamante1,
    RangoJugador.Diamante2,
    RangoJugador.Diamante3,
    RangoJugador.Rubi1,
    RangoJugador.Rubi2,
    RangoJugador.Rubi3,
    RangoJugador.Campeon,
  ])
  Rango: RangoJugador;
  @IsNotEmpty()
  @IsEmail()
  @IsString()
  Gmail: string;
  @IsNotEmpty()
  @IsString()
  Apellido: string;
  Horario?: Date;
}

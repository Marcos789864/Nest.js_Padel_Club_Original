import { IsEmail, IsNotEmpty, IsString, IsNumber, IsIn } from 'class-validator';
import { Club, RangoJugador } from '../Jugador.entity';
export class JugadorDto {
  @IsNotEmpty()
  @IsNumber()
  Puntos?: number;
  @IsNotEmpty()
  @IsString()
  Contraseña: any;
  @IsNotEmpty()
  @IsEmail()
  @IsString()
  Gmail: string;
  @IsNotEmpty()
  @IsString()
  Nombre: string;
  @IsNumber()
  idPartido?: number;
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
  Rango: RangoJugador.Bronce1;
  @IsNumber()
  IdGrupo?: number;
  @IsString()
  Foto?: string;
  @IsNotEmpty()
  @IsIn([Club.Club1])
  Club: Club;
  @IsString()
  iv?: string;
}

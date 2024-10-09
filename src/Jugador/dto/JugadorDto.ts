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
    RangoJugador.Octava,
    RangoJugador.Septima,
    RangoJugador.Sexta,
    RangoJugador.Quinta,
    RangoJugador.Cuarta,
    RangoJugador.Tercera,
    RangoJugador.Segunda,
    RangoJugador.Primera,
  ])
  Rango: RangoJugador.Octava;
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

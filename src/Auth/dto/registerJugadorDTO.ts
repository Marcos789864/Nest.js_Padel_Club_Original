import { IsEmail, IsNotEmpty, IsString, IsIn } from 'class-validator';
import { Club } from 'src/Jugador/Jugador.entity';

export class RegisterJugadorDTO {
  @IsEmail()
  Gmail: string;
  @IsString()
  @IsNotEmpty()
  Nombre: string;
  @IsString()
  @IsNotEmpty()
  Contraseña: string;
  @IsString()
  @IsNotEmpty()
  @IsIn([Club.Club1])
  Club: Club;
  @IsString()
  Foto: string;
}

import { IsEmail, IsString, IsNotEmpty } from 'class-validator';

export class LoginJugadorDTO {
  @IsEmail()
  @IsNotEmpty()
  Gmail: string;

  @IsString()
  @IsNotEmpty()
  Contraseña: string;
}

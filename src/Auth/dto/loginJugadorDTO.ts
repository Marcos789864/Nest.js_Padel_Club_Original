import { IsEmail, IsNotEmpty } from 'class-validator';

export class LoginJugadorDTO {
  @IsEmail()
  @IsNotEmpty()
  Gmail: string;
  @IsNotEmpty()
  Contraseña: any;
}

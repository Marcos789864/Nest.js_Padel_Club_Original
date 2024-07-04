import { IsEmail, IsString, isString } from "class-validator";

export class LoginJugadorDTO
{   
    @IsEmail()
    Gmail: string;

    @IsString()
    Contraseña: string;
}
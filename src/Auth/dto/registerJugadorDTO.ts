import { IsEmail, IsNotEmpty, IsString } from "class-validator";
import { Club } from "src/Jugador/Jugador.entity";
export class RegisterJugadorDTO
{
    @IsEmail()
    Gmail: string;
    @IsString()
    @IsNotEmpty()
    Nombre: string;
    @IsString()
    @IsNotEmpty()
    Contraseña:string;
    @IsString()
    @IsNotEmpty()
    Club: Club;
}
import { IsEmail, IsNotEmpty } from 'class-validator';
export class JugadorDto {
  @IsNotEmpty()
  Nombre: string;
  Foto: string;
  @IsNotEmpty()
  Puntos: number;
  @IsNotEmpty()
  Contraseña: string;
  Amigos: string[];
  id_partidos: null;
  @IsNotEmpty()
  Rango: string;
  @IsEmail()
  Gmail: string;
  @IsNotEmpty()
  Apellido: string;
  Horario: Date;
  id: number;
}

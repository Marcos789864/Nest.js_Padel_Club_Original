import { IsNotEmpty, IsString, IsNumber, IsIn } from 'class-validator';
import { Tipo } from '../Notificaciones.entity';
export class NotificacionesDto {
  @IsNotEmpty()
  @IsString()
  Mensaje: string;
  @IsNotEmpty()
  @IsNumber()
  idE:number ;
  @IsNumber()
  @IsNotEmpty()
  idR: number;
  @IsNotEmpty()
  @IsIn([
    Tipo.tipo1,
    Tipo.tipo2,
    Tipo.tipo3,
    Tipo.tipo4,
    Tipo.tipo5,
    Tipo.tipo6,
    Tipo.tipo7,
    Tipo.tipo8,
    Tipo.tipo9,
  ])
  Tipo: Tipo;
}

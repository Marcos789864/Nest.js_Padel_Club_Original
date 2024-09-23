import { IsNotEmpty, IsIn } from 'class-validator';
import { MensajePreCargado, Tipo } from '../Msjnoti.entity';
export class MsjnotiDto {
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
  ])
  tipo: Tipo;
  @IsNotEmpty()
  @IsIn([MensajePreCargado.Partido])
  msj: MensajePreCargado;
}

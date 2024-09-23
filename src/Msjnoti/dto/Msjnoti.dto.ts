import { IsNotEmpty, IsIn, IsString } from 'class-validator';
import { MensajePreCargado } from '../Msjnoti.entity';
export class MsjnotiDto {
  @IsNotEmpty()
  @IsString()
  tipo: string;
  @IsNotEmpty()
  @IsIn([MensajePreCargado.Partido])
  msj: MensajePreCargado;
}

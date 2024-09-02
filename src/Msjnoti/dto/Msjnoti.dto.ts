import { IsNotEmpty, IsString, IsNumber } from 'class-validator';
export class MsjnotiDto {
  @IsNotEmpty()
  @IsString()
  msj: string;
  @IsNotEmpty()
  @IsNumber()
  idE: number
  @IsNotEmpty()
  @IsNumber()
  idR: number
}

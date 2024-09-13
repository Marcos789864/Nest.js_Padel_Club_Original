import { IsNotEmpty, IsNumber } from 'class-validator';
export class PartidoDto {
  @IsNotEmpty()
  @IsNumber()
  idEquipo1: number;
  @IsNotEmpty()
  @IsNumber()
  idEquipo2: number;
  @IsNotEmpty()
  @IsNumber()
  puntos: number;
  @IsNotEmpty()
  @IsNumber()
  fecha: Date;
}

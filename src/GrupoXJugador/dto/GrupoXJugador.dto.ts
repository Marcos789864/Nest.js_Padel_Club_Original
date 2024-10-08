import { IsNotEmpty, IsNumber } from 'class-validator';
export class GrupoXJugadorDto {
  @IsNotEmpty()
  @IsNumber()
  idEquipo1: number;
  @IsNotEmpty()
  @IsNumber()
  idEquipo2: number;
}

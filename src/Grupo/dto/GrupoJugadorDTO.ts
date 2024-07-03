import { IsNotEmpty, IsNumber } from 'class-validator';
export class GrupoJugadorDto {
  @IsNotEmpty()
  @IsNumber()
  idJugador: number;
}

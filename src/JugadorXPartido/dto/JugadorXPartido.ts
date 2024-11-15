import { IsNotEmpty, IsNumber } from 'class-validator';
export class JugadorXPartidoDto {
  @IsNotEmpty()
  @IsNumber()
  idPartido: number;
  @IsNotEmpty()
  @IsNumber()
  idJugador: number;
  @IsNotEmpty()
  @IsNumber()
  idJugador2: number;
  @IsNotEmpty()
  @IsNumber()
  idJugador3: number;
  @IsNotEmpty()
  @IsNumber()
  idJugador4: number;
}

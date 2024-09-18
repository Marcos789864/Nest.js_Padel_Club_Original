import { IsNotEmpty, IsNumber } from 'class-validator';
export class PartidoDto {
  @IsNotEmpty()
  @IsNumber()
  idGrupo: number;
  @IsNotEmpty()
  @IsNumber()
  puntos: number;
  @IsNotEmpty()
  @IsNumber()
  fecha: Date;
}

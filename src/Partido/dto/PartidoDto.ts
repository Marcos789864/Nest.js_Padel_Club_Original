import { IsNotEmpty, IsNumber } from 'class-validator';
export class PartidoDto {
  @IsNotEmpty()
  @IsNumber()
  idGrupo: number;
  @IsNotEmpty()
  @IsNumber()
  set1: string;
  @IsNumber()
  set2: string;
  @IsNumber()
  set3: string;
  @IsNotEmpty()
  @IsNumber()
  fecha: Date;
  @IsNotEmpty()
  @IsNumber()
  puntajeEquipo1: number;
  @IsNotEmpty()
  @IsNumber()
  puntajeEquipo2: number;
}

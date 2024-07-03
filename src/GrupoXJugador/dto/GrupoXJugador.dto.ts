import { IsNotEmpty, IsNumber } from 'class-validator';
export class GrupoXJugadorDto {
  @IsNotEmpty()
  @IsNumber()
  idGrupo: number;
  @IsNotEmpty()
  @IsNumber()
  id1: number;
  @IsNumber()
  id2: number;
  @IsNumber()
  id3: number;
  @IsNumber()
  id4: number;
}

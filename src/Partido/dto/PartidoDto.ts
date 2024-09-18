import { IsNotEmpty, IsNumber } from 'class-validator';
export class PartidoDto {
  @IsNotEmpty()
  @IsNumber()
  idGrupo: number;
  @IsNotEmpty()
  @IsNumber()
  set1: string;
  @IsNotEmpty()
  @IsNumber()
  set2: string;
  @IsNotEmpty()
  @IsNumber()
  set3: string;
  @IsNotEmpty()
  @IsNumber()
  fecha: Date;
}

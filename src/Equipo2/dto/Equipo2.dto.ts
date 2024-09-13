import { IsNotEmpty, IsNumber } from 'class-validator';
export class Equipo2Dto {
  @IsNotEmpty()
  @IsNumber()
  id3: number = 0;
  @IsNumber()
  id4: number = 0;
  @IsNumber()
  idGrupo: number;
}

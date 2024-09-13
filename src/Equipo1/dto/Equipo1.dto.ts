import { IsNotEmpty, IsNumber } from 'class-validator';
export class Equipo1Dto {
  @IsNotEmpty()
  @IsNumber()
  id1: number;
  @IsNumber()
  id2: number = 0;
}

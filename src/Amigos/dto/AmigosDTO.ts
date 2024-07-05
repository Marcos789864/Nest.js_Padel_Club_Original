import { IsNotEmpty, IsNumber } from 'class-validator';

export class AmigosDto {
  @IsNotEmpty()
  @IsNumber()
  id1: number;
  @IsNotEmpty()
  @IsNumber()
  id2: number;
}

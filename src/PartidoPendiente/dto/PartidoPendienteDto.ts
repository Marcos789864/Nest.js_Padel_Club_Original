import {
  IsBoolean,
  IsDate,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class PartidoPendienteDto {
  @IsNotEmpty()
  @IsNumber()
  idGrupo: number;

  @IsNotEmpty()
  @IsString()
  set1: string;

  @IsString()
  set2: string;

  @IsString()
  set3: string;

  @IsNotEmpty()
  @IsDate()
  @Type(() => Date)
  fecha: Date;

  @IsNotEmpty()
  @IsNumber()
  puntajeEquipo1: number;

  @IsNotEmpty()
  @IsNumber()
  puntajeEquipo2: number;

  @IsNotEmpty()
  @IsBoolean()
  confirmacion: boolean;
}

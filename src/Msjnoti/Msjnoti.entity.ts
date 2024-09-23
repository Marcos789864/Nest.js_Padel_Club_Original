import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export enum MensajePreCargado {
  Partido = '¿Este fue el resultado del partido?',
}

@Entity()
export class Msjnoti {
  @PrimaryGeneratedColumn()
  id;
  @Column()
  tipo: string;
  @Column()
  msj: MensajePreCargado;
}

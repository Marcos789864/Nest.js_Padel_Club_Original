import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Msj {
  @PrimaryGeneratedColumn()
  idTipo: number;
  @Column()
  msj: string;
}

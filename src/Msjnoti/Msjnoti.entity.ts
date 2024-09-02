import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Msjnoti {
  @PrimaryGeneratedColumn()
  idTipo: number;
  @Column()
  msj: string;
  @Column()
  idE: number;
  @Column()
  idR:number;
}

import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Equipo1 {
  @Column()
  @PrimaryGeneratedColumn()
  idEquipo1: number;
  @Column()
  id1: number;
  @Column()
  id2: number;
}

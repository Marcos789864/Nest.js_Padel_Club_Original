import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Partido {
  @Column()
  @PrimaryGeneratedColumn()
  idPartido: number;
  @Column()
  idGrupo: number;
  @Column()
  set1: string;
  @Column()
  set2: string;
  @Column()
  set3: string;
  @Column()
  fecha: Date;
  @Column()
  puntajeEquipo1: number;
  @Column()
  puntajeEquipo2: number;
}

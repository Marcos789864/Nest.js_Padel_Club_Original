import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Partido {
  @Column()
  @PrimaryGeneratedColumn()
  idPartido: number;
  @Column()
  idGrupo: number;
  @Column()
  puntos: number;
  @Column()
  fecha: Date;
}

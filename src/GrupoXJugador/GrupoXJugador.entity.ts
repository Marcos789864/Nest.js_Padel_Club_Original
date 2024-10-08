import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class GrupoXJugador {
  @Column()
  @PrimaryGeneratedColumn()
  idGrupo: number;
  @Column()
  idEquipo1: number;
  @Column()
  idEquipo2: number;
}

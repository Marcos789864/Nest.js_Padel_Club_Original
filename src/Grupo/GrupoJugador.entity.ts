import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class GrupoJugador {
  @PrimaryGeneratedColumn()
  idGrupo: number;

  @Column()
  idJugador: number;
}

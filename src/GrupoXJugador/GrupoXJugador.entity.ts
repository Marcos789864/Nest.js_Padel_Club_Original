import { Column, Entity } from 'typeorm';

@Entity()
export class GrupoXJugador {
  @Column()
  idGrupo: number;
  @Column()
  id1: number;
  @Column()
  id2: number;
  @Column()
  id3: number;
  @Column()
  id4: number;
}

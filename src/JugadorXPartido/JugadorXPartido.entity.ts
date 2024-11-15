import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class JugadorXPartido {
  @PrimaryGeneratedColumn()
  id;
  @Column()
  idJugador: number;
  @Column()
  idJugador2: number;
  @Column()
  idJugador3: number;
  @Column()
  idJugador4: number;
  @Column()
  idPartido: number;
}

import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Equipo2 {
  @Column()
  @PrimaryGeneratedColumn()
  idEquipo2: number;
  @Column()
  id3: number;
  @Column()
  id4: number;
}

import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Amigos {
  @PrimaryGeneratedColumn()
  idAmistad: number;
  @Column()
  id1: number;
  @Column()
  id2: number;
}

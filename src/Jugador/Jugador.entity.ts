import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Jugador {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  Nombre: string;

  @Column()
  Foto: string;

  @Column()
  Puntos: number;

  @Column()
  Contraseña: string;

  @Column()
  Amigos: string[];

  @Column()
  id_partidos: number;

  @Column()
  Rango: string;

  @Column()
  Gmail: string;

  @Column()
  Apellido: string;

  @Column()
  Horario: Date;
}

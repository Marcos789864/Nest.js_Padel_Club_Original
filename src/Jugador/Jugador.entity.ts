import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export enum RangoJugador {
  Octava = 'Octava',
  Septima = 'Septima',
  Sexta = 'Sexta',
  Quinta = 'Quinta',
  Cuarta = 'Cuarta',
  Tercera = 'Tercera',
  Segunda = 'Segunda',
  Primera = 'Primera',
}

export enum Club {
  Club1 = 'Hebraica',
}

@Entity()
export class Jugador {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  Puntos: number = 1000;

  @Column()
  Contraseña: string;

  @Column({ unique: true })
  Gmail: string;

  @Column({ unique: true })
  Nombre: string;

  @Column()
  Rango: RangoJugador = RangoJugador.Octava;

  @Column({nullable: true})
  Foto: string;

  @Column()
  Club: Club;

  @Column()
  iv: string;
}

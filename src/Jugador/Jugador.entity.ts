import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export enum RangoJugador {
  Bronce1 = 'Bronce I',
  Bronce2 = 'Bronce II',
  Bronce3 = 'Bronce III',
  Plata1 = 'Plata I',
  Plata2 = 'Plata II',
  Plata3 = 'Plata III',
  Oro1 = 'Oro I',
  Oro2 = 'Oro II',
  Oro3 = 'Oro III',
  Diamante1 = 'Diamante i',
  Diamante2 = 'Diamante ii',
  Diamante3 = 'Diamante iii',
  Rubi1 = 'Rubi I',
  Rubi2 = 'Rubi II',
  Rubi3 = 'Rubi III',
  Campeon = 'Campeon',
}

@Entity()
export class Jugador {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
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
  Rango: RangoJugador;

  @Column({ unique: true })
  Gmail: string;

  @Column()
  Apellido: string;

  @Column()
  Horario: Date;
}

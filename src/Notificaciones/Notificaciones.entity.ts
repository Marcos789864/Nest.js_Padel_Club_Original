import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export enum Tipo {
 tipo1 = 'Partido',
 tipo2 = 'Torneo',
 tipo3 = 'Global',
 tipo4 = 'Confirmar_Resultado_Partido',
 tipo5 = 'Confirmar_Partido',
 tipo6= 'Confirmar_Resultado_Partido_Torneo',
 tipo7 = 'Confirmar_Partido_Torneo',
 tipo8= 'Notificaciones',
 tipo9 = 'Sancion',
 
}



@Entity()
export class Notificaciones {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  Tipo: Tipo;

  @Column()
  idE: number;

  @Column()
  idR: number;

  @Column()
  Mensaje: string;
}
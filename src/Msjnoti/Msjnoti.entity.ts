import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export enum MensajePreCargado {
  Partido = '¿Este fue el resultado del partido?',
}

export enum Tipo {
  tipo1 = 'Invitacion_Partido', // No van a haber invitaciones
  tipo2 = 'Invitacion_Torneo', //Cuando te invito para entrar a un torneo
  tipo3 = 'Global',
  tipo4 = 'Confirmar_Resultado_Partido',
  tipo5 = 'Confirmar_Resultado_Partido_Torneo',
  tipo6 = 'Confirmar_Partido_Torneo', // el partido ya dentro del torneo
  tipo7 = 'Notificaciones',
  tipo8 = 'Sancion',
}

@Entity()
export class Msjnoti {
  @PrimaryGeneratedColumn()
  id;
  @Column()
  tipo: Tipo;
  @Column()
  msj: MensajePreCargado;
}

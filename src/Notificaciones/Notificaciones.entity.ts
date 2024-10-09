import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export enum Tipo {
  tipo1 = 'Invitacion_Partido', // eliminar
  tipo2 = 'Invitacion_Torneo', // eliminar
  tipo3 = 'Global', // notificaciones para todo el mundo sobre actualizaciones y similares
  tipo4 = 'Confirmar_Resultado_Partido', // confirmar el resultado del partido
  tipo5 = 'Confirmar_Resultado_Partido_Torneo', // confirmar el resultado del partido de un torneo
  tipo6 = 'Confirmar_Partido_Torneo', // eliminar
  tipo7 = 'Notificacion', // aviso previo a sancion
  tipo8 = 'Sancion', // una sancion por mal comportamiento
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

  @Column()
  idGrupo: number;
}

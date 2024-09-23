import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { JugadorModule } from './Jugador/Jugador.modules';
import { AppService } from './app.service';
import { Jugador } from './Jugador/Jugador.entity';
import { GrupoXJugadorModules } from './GrupoXJugador/GrupoXJugador.modules';
import { GrupoXJugador } from './GrupoXJugador/GrupoXJugador.entity';
import { Amigos } from './Amigos/Amigos.entity';
import { AmigosModule } from './Amigos/Amigos.modules';
import { Notificaciones } from './Notificaciones/Notificaciones.entity';
import { NotificacionesModule } from './Notificaciones/Notificaciones.modules';
import { AuthModule } from './Auth/entities/authModules';
import { PartidoModules } from './Partido/Partido.modules';
import { Partido } from './Partido/Partido.entity';
import { Equipo1 } from './Equipo1/Equipo1.entity';
import { Equipo1Modules } from './Equipo1/Equipo1.modules';
import { Equipo2 } from './Equipo2/Equipo2.entity';
import { Equipo2Modules } from './Equipo2/Equipo2.modules';
import { PartidoPendiente } from './PartidoPendiente/PartidoPendiente.entity';
import { PartidoPendienteModules } from './PartidoPendiente/PartidoPendiente.modules';
import { Msjnoti } from './Msjnoti/Msjnoti.entity';
import { MsjnotiModule } from './Msjnoti/Msjnoti.modules';

@Module({
  imports: [
    JugadorModule,
    GrupoXJugadorModules,
    AmigosModule,
    AuthModule,
    NotificacionesModule,
    PartidoModules,
    Equipo1Modules,
    Equipo2Modules,
    PartidoPendiente,
    Msjnoti,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'root',
      database: 'postgres',
      entities: [
        Jugador,
        GrupoXJugador,
        Amigos,
        Notificaciones,
        Partido,
        Equipo1,
        Equipo2,
        PartidoPendienteModules,
        MsjnotiModule,
      ],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

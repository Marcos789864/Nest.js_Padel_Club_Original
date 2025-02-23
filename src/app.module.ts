import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JugadorModule } from './Jugador/Jugador.modules';
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
import { JugadorXPartidoModule } from './JugadorXPartido/JugadorXPartido.modules';
import { JugadorXPartido } from './JugadorXPartido/JugadorXPartido.entity';
import { HealthModule } from './Health/Health.modules';


@Module({
  imports: [
    ConfigModule.forRoot(), // Carga las variables del .env
    JugadorModule,
    GrupoXJugadorModules,
    AmigosModule,
    AuthModule,
    NotificacionesModule,
    PartidoModules,
    Equipo1Modules,
    Equipo2Modules,
    PartidoPendienteModules,
    MsjnotiModule,
    JugadorXPartidoModule,
    HealthModule,
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        type: 'postgres',
        url: config.get<string>('DATABASE_URL'),
        entities: [
          Jugador,
          GrupoXJugador,
          Amigos,
          Notificaciones,
          Partido,
          Equipo1,
          Equipo2,
          PartidoPendiente,
          Msjnoti,
          JugadorXPartido,
        ],
        synchronize: true, // ⚠ Solo en desarrollo
        ssl: { rejectUnauthorized: false }, // Necesario para Railway
      }),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

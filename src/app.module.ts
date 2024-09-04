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

@Module({
  imports: [
    JugadorModule,
    GrupoXJugadorModules,
    AmigosModule,
    AuthModule,
    NotificacionesModule,
    PartidoModules,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'root',
      database: 'postgres',
      entities: [Jugador, GrupoXJugador, Amigos, Notificaciones, Partido],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

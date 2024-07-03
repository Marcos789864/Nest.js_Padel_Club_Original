import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { JugadorModule } from './Jugador/Jugador.modules';
import { GrupoJugadorModule } from './Grupo/GrupoJugador.modules';
import { GrupoJugador } from './Grupo/GrupoJugador.entity';
import { AppService } from './app.service';
import { Jugador } from './Jugador/Jugador.entity';
import { GrupoXJugadorModules } from './GrupoXJugador/GrupoXJugador.modules';
import { GrupoXJugador } from './GrupoXJugador/GrupoXJugador.entity';

@Module({
  imports: [
    JugadorModule,
    GrupoJugadorModule,
    GrupoXJugadorModules,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'root',
      database: 'postgres',
      entities: [Jugador, GrupoJugador, GrupoXJugador],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

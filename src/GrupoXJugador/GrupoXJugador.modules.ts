import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GrupoXJugador } from './GrupoXJugador.entity';
import { GrupoXJugadorService } from './GrupoXJugador.services';
import { GrupoXJugadorController } from './GrupoXJugador.controller';
import { Jugador } from 'src/Jugador/Jugador.entity';

@Module({
  imports: [TypeOrmModule.forFeature([GrupoXJugador, Jugador])],
  providers: [GrupoXJugadorService],
  controllers: [GrupoXJugadorController],
})
export class GrupoXJugadorModules {}

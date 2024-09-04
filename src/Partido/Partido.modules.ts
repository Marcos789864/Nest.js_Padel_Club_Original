import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Partido } from './Partido.entity';
import { PartidoService } from './Partido.service';
import { PartidoController } from './Partido.controller';
import { GrupoXJugador } from 'src/GrupoXJugador/GrupoXJugador.entity';
import { Jugador } from 'src/Jugador/Jugador.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Partido, Jugador, GrupoXJugador])],
  providers: [PartidoService],
  controllers: [PartidoController],
})
export class PartidoModules {}

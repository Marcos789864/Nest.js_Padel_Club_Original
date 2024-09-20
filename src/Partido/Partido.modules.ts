import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Partido } from './Partido.entity';
import { PartidoService } from './Partido.service';
import { PartidoController } from './Partido.controller';
import { GrupoXJugador } from 'src/GrupoXJugador/GrupoXJugador.entity';
import { Jugador } from 'src/Jugador/Jugador.entity';
import { Equipo1 } from 'src/Equipo1/Equipo1.entity';
import { Equipo2 } from 'src/Equipo2/Equipo2.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Partido,
      Jugador,
      GrupoXJugador,
      Equipo1,
      Equipo2,
    ]),
  ],
  providers: [PartidoService],
  controllers: [PartidoController],
  exports: [PartidoService],
})
export class PartidoModules {}

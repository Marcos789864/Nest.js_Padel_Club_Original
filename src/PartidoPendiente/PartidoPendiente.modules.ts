import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PartidoPendiente } from './PartidoPendiente.entity';
import { PartidoPendienteService } from './PartidoPendiente.service';
import { PartidoPendienteController } from './PartidoPendiente.controller';
import { Jugador } from 'src/Jugador/Jugador.entity';
import { Equipo1 } from 'src/Equipo1/Equipo1.entity';
import { Equipo2 } from 'src/Equipo2/Equipo2.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([PartidoPendiente, Jugador, Equipo1, Equipo2]),
  ],
  providers: [PartidoPendienteService],
  controllers: [PartidoPendienteController],
  exports: [PartidoPendienteService],
})
export class PartidoPendienteModules {}

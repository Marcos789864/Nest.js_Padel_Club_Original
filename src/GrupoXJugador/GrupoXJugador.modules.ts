import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GrupoXJugador } from './GrupoXJugador.entity';
import { GrupoXJugadorService } from './GrupoXJugador.services';
import { GrupoXJugadorController } from './GrupoXJugador.controller';
import { Equipo1 } from 'src/Equipo1/Equipo1.entity';
import { Equipo2 } from 'src/Equipo2/Equipo2.entity';

@Module({
  imports: [TypeOrmModule.forFeature([GrupoXJugador, Equipo1, Equipo2])],
  providers: [GrupoXJugadorService],
  controllers: [GrupoXJugadorController],
})
export class GrupoXJugadorModules {}

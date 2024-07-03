import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GrupoXJugador } from './GrupoXJugador.entity';
import { GrupoXJugadorService } from './GrupoXJugador.service';
import { GrupoXJugadorController } from './GrupoXJugador.controller';

@Module({
  imports: [TypeOrmModule.forFeature([GrupoXJugador])],
  providers: [GrupoXJugadorService],
  controllers: [GrupoXJugadorController],
})
export class GrupoXJugadorModules {}

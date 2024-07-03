import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GrupoJugador } from './GrupoJugador.entity';
import { GrupoJugadorService } from './GrupoJugador.service';
import { GrupoJugadorController } from './GrupoJugador.controller';

@Module({
  imports: [TypeOrmModule.forFeature([GrupoJugador])],
  providers: [GrupoJugadorService],
  controllers: [GrupoJugadorController],
})
export class GrupoJugadorModule {}

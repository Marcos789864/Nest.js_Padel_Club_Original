import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JugadorService } from './Jugador.services';
import { JugadorController } from './Jugador.controller';
import { Jugador } from './Jugador.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Jugador])],
  providers: [JugadorService],
  controllers: [JugadorController],
  exports: [JugadorService],
})
export class JugadorModule {}

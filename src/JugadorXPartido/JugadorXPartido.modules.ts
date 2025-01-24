import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JugadorXPartidoService } from './JugadorXPartido.services';
import { JugadorXPartido } from './JugadorXPartido.entity';
import { JugadorXPartidoController } from './JugadorXPartido.controller';

@Module({
  imports: [TypeOrmModule.forFeature([JugadorXPartido])],
  providers: [JugadorXPartidoService],
  controllers: [JugadorXPartidoController],
  exports: [JugadorXPartidoService],
})
export class JugadorXPartidoModule {}

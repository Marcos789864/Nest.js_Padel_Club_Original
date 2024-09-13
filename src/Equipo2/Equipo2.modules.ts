import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Equipo2 } from './Equipo2.entity';
import { Equipo2Service } from './Equipo2.services';
import { Equipo2Controller } from './Equipo2.controller';
import { Jugador } from 'src/Jugador/Jugador.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Equipo2, Jugador])],
  providers: [Equipo2Service],
  controllers: [Equipo2Controller],
})
export class Equipo2Modules {}

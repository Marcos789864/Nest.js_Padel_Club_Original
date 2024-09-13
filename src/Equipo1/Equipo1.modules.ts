import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Equipo1 } from './Equipo1.entity';
import { Equipo1Service } from './Equipo1.services';
import { Equipo1Controller } from './Equipo1.controller';
import { Jugador } from 'src/Jugador/Jugador.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Equipo1, Jugador])],
  providers: [Equipo1Service],
  controllers: [Equipo1Controller],
})
export class Equipo1Modules {}

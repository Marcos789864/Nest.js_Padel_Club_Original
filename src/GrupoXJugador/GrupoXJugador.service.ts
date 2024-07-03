import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GrupoXJugadorDto } from './dto/GrupoXJugador.dto';
import { GrupoXJugador } from './GrupoXJugador.entity';

@Injectable()
export class GrupoXJugadorService {
  constructor(
    @InjectRepository(GrupoXJugador)
    private GrupoXJugadorRepository: Repository<GrupoXJugador>,
  ) {}

  AgregarJugador(Jugador: GrupoXJugadorDto) {
    const newJugador = this.GrupoXJugadorRepository.create(Jugador);
    return this.GrupoXJugadorRepository.save(newJugador);
  }

  MostrarJugadores() {
    return this.GrupoXJugadorRepository.find();
  }
}

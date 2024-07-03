import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GrupoXJugadorDto } from './dto/GrupoXJugador.dto';
import { GrupoXJugador } from './GrupoXJugador.entity';
import { Jugador } from 'src/Jugador/Jugador.entity';

@Injectable()
export class GrupoXJugadorService {
  constructor(
    @InjectRepository(GrupoXJugador)
    private GrupoXJugadorRepository: Repository<GrupoXJugador>,
    @InjectRepository(Jugador)
    private JugadorRepository: Repository<Jugador>,
  ) {}

  AgregarJugador(Jugador: GrupoXJugadorDto) {
    const newJugador = this.GrupoXJugadorRepository.create(Jugador);
    return this.GrupoXJugadorRepository.save(newJugador);
  }

  MostrarJugadores(id: number) {
    return this.JugadorRepository.findOne({
      where: {
        id: id,
      },
    });
  }
}

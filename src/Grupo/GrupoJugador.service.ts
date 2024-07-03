import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GrupoJugador } from './GrupoJugador.entity';
import { GrupoJugadorDto } from './dto/GrupoJugadorDTO';

@Injectable()
export class GrupoJugadorService {
  constructor(
    @InjectRepository(GrupoJugador)
    private grupoJugadorRepository: Repository<GrupoJugador>,
  ) {}

  CreateGrupo(GrupoJugador: GrupoJugadorDto) {
    const newJugador = this.grupoJugadorRepository.create(GrupoJugador);
    return this.grupoJugadorRepository.save(newJugador);
  }

  GetJugadoresGrupo() {
    return this.grupoJugadorRepository.find();
  }
}

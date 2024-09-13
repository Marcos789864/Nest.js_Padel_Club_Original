import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, In } from 'typeorm';
import { Equipo1Dto } from './dto/Equipo1.dto';
import { Equipo1 } from './Equipo1.entity';
import { Jugador } from 'src/Jugador/Jugador.entity';
import { Equipo1UpdateDto } from './dto/Equipo1Update';

@Injectable()
export class Equipo1Service {
  constructor(
    @InjectRepository(Equipo1)
    private Equipo1Repository: Repository<Equipo1>,
    @InjectRepository(Jugador)
    private JugadorRepository: Repository<Jugador>,
  ) {}

  AgregarJugador(Jugador: Equipo1Dto) {
    const newJugador = this.Equipo1Repository.create(Jugador);
    return this.Equipo1Repository.save(newJugador);
  }

  UpdateGrupoXJugador(idEquipo1: number, GrupoXJugador: Equipo1UpdateDto) {
    this.Equipo1Repository.update({ idEquipo1 }, GrupoXJugador);
  }

  async getGrupoJugadores(idEquipo1: number) {
    const jugadorXGrupo = await this.Equipo1Repository.findOne({
      where: { idEquipo1 },
    });
    if (!jugadorXGrupo) {
      throw new NotFoundException(`Grupo con id ${idEquipo1} no encontrado`);
    }

    const jugadores = await this.JugadorRepository.findBy({
      id: In([jugadorXGrupo.id1, jugadorXGrupo.id2]),
    });

    return { idGrupo: jugadorXGrupo, jugadores };
  }
}

import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, In } from 'typeorm';
import { Equipo2Dto } from './dto/Equipo2.dto';
import { Equipo2 } from './Equipo2.entity';
import { Jugador } from 'src/Jugador/Jugador.entity';
import { Equipo2UpdateDto } from './dto/Equipo2Update';

@Injectable()
export class Equipo2Service {
  constructor(
    @InjectRepository(Equipo2)
    private Equipo1Repository: Repository<Equipo2>,
    @InjectRepository(Jugador)
    private JugadorRepository: Repository<Jugador>,
  ) {}

  AgregarJugador(Jugador: Equipo2Dto) {
    const newJugador = this.Equipo1Repository.create(Jugador);
    return this.Equipo1Repository.save(newJugador);
  }

  UpdateGrupoXJugador(idEquipo2: number, GrupoXJugador: Equipo2UpdateDto) {
    this.Equipo1Repository.update({ idEquipo2 }, GrupoXJugador);
  }

  async getGrupoJugadores(idEquipo2: number) {
    const jugadorXGrupo = await this.Equipo1Repository.findOne({
      where: { idEquipo2 },
    });
    if (!jugadorXGrupo) {
      throw new NotFoundException(`Grupo con id ${idEquipo2} no encontrado`);
    }

    const jugadores = await this.JugadorRepository.findBy({
      id: In([jugadorXGrupo.id3, jugadorXGrupo.id4]),
    });

    return { idGrupo: jugadorXGrupo, jugadores };
  }
}

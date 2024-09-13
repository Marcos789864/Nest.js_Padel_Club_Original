import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, In } from 'typeorm';
import { GrupoXJugador } from 'src/GrupoXJugador/GrupoXJugador.entity';
import { Partido } from './Partido.entity';
import { Jugador } from 'src/Jugador/Jugador.entity';
import { PartidoDto } from './dto/PartidoDto';
import { Equipo1 } from 'src/Equipo1/Equipo1.entity';
import { Equipo2 } from 'src/Equipo2/Equipo2.entity';

@Injectable()
export class PartidoService {
  constructor(
    @InjectRepository(GrupoXJugador)
    private GrupoXJugadorRepository: Repository<GrupoXJugador>,
    @InjectRepository(Jugador)
    private JugadorRepository: Repository<Jugador>,
    @InjectRepository(Partido)
    private PartidoRepository: Repository<Partido>,
    @InjectRepository(Equipo1)
    private Equipo1Repository: Repository<Equipo1>,
    @InjectRepository(Equipo2)
    private Equipo2Repository: Repository<Equipo2>,
  ) {}

  CreatePartido(Partido: PartidoDto) {
    const newJugador = this.PartidoRepository.create(Partido);
    return this.GrupoXJugadorRepository.save(newJugador);
  }

  async getGrupoJugadores(idEquipo1: number, idEquipo2: number) {
    const jugadorEquipo1 = await this.Equipo1Repository.findOne({
      where: { idEquipo1 },
    });
    if (!jugadorEquipo1) {
      throw new NotFoundException(`Grupo con id ${idEquipo1} no encontrado`);
    }
    const jugadorEquipo2 = await this.Equipo2Repository.findOne({
      where: { idEquipo2 },
    });
    if (!jugadorEquipo2) {
      throw new NotFoundException(`Grupo con id ${idEquipo1} no encontrado`);
    }
    const jugadores = await this.JugadorRepository.findBy({
      id: In([
        jugadorEquipo1.id1,
        jugadorEquipo1.id2,
        jugadorEquipo2.id3,
        jugadorEquipo2.id4,
      ]),
    });

    return { idEquipo1: jugadorEquipo1, idEquipo2: jugadorEquipo2, jugadores };
  }
}

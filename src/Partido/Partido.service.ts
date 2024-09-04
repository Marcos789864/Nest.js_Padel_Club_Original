import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, In } from 'typeorm';
import { GrupoXJugador } from 'src/GrupoXJugador/GrupoXJugador.entity';
import { Partido } from './Partido.entity';
import { Jugador } from 'src/Jugador/Jugador.entity';
import { PartidoDto } from './dto/PartidoDto';

@Injectable()
export class PartidoService {
  constructor(
    @InjectRepository(GrupoXJugador)
    private GrupoXJugadorRepository: Repository<GrupoXJugador>,
    @InjectRepository(Jugador)
    private JugadorRepository: Repository<Jugador>,
    @InjectRepository(Partido)
    private PartidoRepository: Repository<Partido>,
  ) {}

  CreatePartido(Partido: PartidoDto) {
    const newJugador = this.PartidoRepository.create(Partido);
    return this.GrupoXJugadorRepository.save(newJugador);
  }

  async getGrupoJugadores(idGrupo: number) {
    const jugadorXGrupo = await this.GrupoXJugadorRepository.findOne({
      where: { idGrupo },
    });
    if (!jugadorXGrupo) {
      throw new NotFoundException(`Grupo con id ${idGrupo} no encontrado`);
    }

    const jugadores = await this.JugadorRepository.findBy({
      id: In([
        jugadorXGrupo.id1,
        jugadorXGrupo.id2,
        jugadorXGrupo.id3,
        jugadorXGrupo.id4,
      ]),
    });

    return { idGrupo: jugadorXGrupo, jugadores };
  }
}

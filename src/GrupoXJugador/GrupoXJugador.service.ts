import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, In } from 'typeorm';
import { GrupoXJugadorDto } from './dto/GrupoXJugador.dto';
import { GrupoXJugador } from './GrupoXJugador.entity';
import { Jugador } from 'src/Jugador/Jugador.entity';
import { GrupoXJugadorUpdateDto } from './dto/GrupoXJugadorUpdate.dto';

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

  UpdateGrupoXJugador(idGrupo: number, GrupoXJugador: GrupoXJugadorUpdateDto) {
    this.GrupoXJugadorRepository.update({ idGrupo }, GrupoXJugador);
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

  async ActualizarGrupoJugadores(
    idGrupo: number,
    GrupoXJugador: GrupoXJugadorUpdateDto,
  ) {
    this.GrupoXJugadorRepository.update({ idGrupo }, GrupoXJugador);
  }
}

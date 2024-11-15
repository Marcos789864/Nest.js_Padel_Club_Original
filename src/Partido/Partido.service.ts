import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, In } from 'typeorm';
import { Partido } from './Partido.entity';
import { Jugador } from 'src/Jugador/Jugador.entity';
import { PartidoDto } from './dto/PartidoPendienteDto';
import { Equipo1 } from 'src/Equipo1/Equipo1.entity';
import { Equipo2 } from 'src/Equipo2/Equipo2.entity';

@Injectable()
export class PartidoService {
  PartidoService: any;
  constructor(
    @InjectRepository(Jugador)
    private JugadorRepository: Repository<Jugador>,
    @InjectRepository(Partido)
    private PartidoRepository: Repository<Partido>,
    @InjectRepository(Equipo1)
    private Equipo1Repository: Repository<Equipo1>,
    @InjectRepository(Equipo2)
    private Equipo2Repository: Repository<Equipo2>,
  ) {}

  async CreatePartido(Partido: PartidoDto) {
    try {
      const newPartido = this.PartidoRepository.create(Partido);
      console.log('Partido creado con éxito:', newPartido);

      return await this.PartidoRepository.save(newPartido);
    } catch (error) {
      console.error('Error al crear el partido:', error);
      throw new Error('Error al crear el partido');
    }
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

  async GetPartidoByIdGrupo(idGrupo: number) {
    {
      console.log('id' + idGrupo);
      const Partido = await this.PartidoRepository.find({
        where: { idGrupo },
      });
      return Partido;
    }
  }

  async GetPartidoById(id: number) {
    {
      console.log('id' + id);
      const Partido = await this.PartidoRepository.find({
        where: { idPartido: id },
      });
      return Partido;
    }
  }

  async getPartidosbyIdJugador(id: number) {
    const partidos = [];
    const equipo1 = await this.Equipo1Repository.find({
      where: [{ id1: id }, { id2: id }],
    });

    const filteredEquipo1 = equipo1.filter((equipo) => equipo.id2 !== 0);
    const equipo2 = await this.Equipo2Repository.find({
      where: [{ id3: id }, { id4: id }],
    });

    const filteredEquipo2 = equipo2.filter(
      (equipo) => equipo.id4 !== 0 && equipo.id3 !== 0,
    );

    console.log(filteredEquipo1);
    console.log(filteredEquipo2);

    for (let i = 0; i < filteredEquipo2.length; i++) {
      const idGrupo = filteredEquipo2[i].idEquipo2;
      console.log('ID de grupo a buscar:', idGrupo);
      const partido = await this.GetPartidoByIdGrupo(idGrupo);
      partidos.push(partido);
    }
    console.log(JSON.stringify(partidos, null, 2));
    return partidos;
  }
}

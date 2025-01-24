import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Equipo1 } from 'src/Equipo1/Equipo1.entity';
import { Equipo2 } from 'src/Equipo2/Equipo2.entity';
import { GrupoXJugador } from './GrupoXJugador.entity';
import { GrupoXJugadorDto } from './dto/GrupoXJugador.dto';
import { Equipo1Dto } from 'src/Equipo1/dto/Equipo1.dto';
import { Equipo2Dto } from 'src/Equipo2/dto/Equipo2.dto';
@Injectable()
export class GrupoXJugadorService {
  constructor(
    @InjectRepository(Equipo1)
    private equipo1Repository: Repository<Equipo1>,
    @InjectRepository(Equipo2)
    private equipo2Repository: Repository<Equipo2>,
    @InjectRepository(GrupoXJugador)
    private GrupoXJugadorRepository: Repository<GrupoXJugador>,
  ) {}
  async crearGrupoConEquipos(idJugador: number) {
    console.log('ID del jugador recibido:', idJugador);

    const crearGrupoDto = new GrupoXJugadorDto();
    const idEquipo1 = new Equipo1Dto();
    const idEquipo2 = new Equipo2Dto();

    console.log('Datos de crearGrupoDto antes de la creación:', crearGrupoDto);
    console.log('Datos de idEquipo1 antes de la creación:', idEquipo1);
    console.log('Datos de idEquipo2 antes de la creación:', idEquipo2);

    try {
      const equipo1 = this.equipo1Repository.create({
        ...idEquipo1,
        id1: idJugador,
      });
      console.log('Equipo 1 creado:', equipo1);

 
      const nuevoEquipo1 = await this.equipo1Repository.save(equipo1);
      console.log('Equipo 1 guardado en la base de datos:', nuevoEquipo1);

      const equipo2 = this.equipo2Repository.create(idEquipo2);
      console.log('Equipo 2 creado:', equipo2);

      const nuevoEquipo2 = await this.equipo2Repository.manager.save(equipo2);
      console.log('Equipo 2 guardado en la base de datos:', nuevoEquipo2);

      const grupo = this.GrupoXJugadorRepository.create({
        ...crearGrupoDto,
        idEquipo1: nuevoEquipo1.idEquipo1,
        idEquipo2: nuevoEquipo2.idEquipo2,
      });
      console.log('Grupo creado:', grupo);

      
      const nuevoGrupo = await this.GrupoXJugadorRepository.save(grupo);
      console.log('Grupo guardado en la base de datos:', nuevoGrupo);

      return nuevoGrupo;
    } catch (error) {
      
      console.error('Error al crear el grupo:', error.message);
      throw new BadRequestException('Error al crear el grupo');
    }
  }

  async getIdGrupoForEquipo(idGrupo: number) {
    const jugadorXGrupo = await this.GrupoXJugadorRepository.findOne({
      where: { idGrupo },
    });
    if (!jugadorXGrupo) {
      throw new NotFoundException(`Grupo con id ${idGrupo} no encontrado`);
    }

    return { idGrupo: jugadorXGrupo };
  }
}

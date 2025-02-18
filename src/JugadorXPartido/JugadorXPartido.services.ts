import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IntegerType, Repository } from 'typeorm';
import { JugadorXPartido } from './JugadorXPartido.entity';
import { JugadorXPartidoDto } from './dto/JugadorXPartido';

@Injectable()
export class JugadorXPartidoService {
  constructor(
    @InjectRepository(JugadorXPartido)
    private JugadorXPartidoRepository: Repository<JugadorXPartido>,
  ) {}

  async Create(JugadorXPartido: JugadorXPartidoDto) {
    try{
      const partido = this.JugadorXPartidoRepository.create(JugadorXPartido);
      console.log('exito', partido)
      return await this.JugadorXPartidoRepository.save(partido);
    } catch(error) {
      console.error('Error al crear el historial coso:', error);
      throw new Error('Error al crear cosocosin');
    }
    
  }

  ObtenerJugadoresXPartido(id) {
    const partido = this.JugadorXPartidoRepository.find({
      where: [
        { id: id },
        { idJugador2: id },
        { idJugador3: id },
        { idJugador4: id },
      ],
    });
    return partido;
  }
  
  async AgregarJugadorXPartido(jugadorXPartidoDto: JugadorXPartidoDto) {
    const nuevoRegistro = this.JugadorXPartidoRepository.create(jugadorXPartidoDto);
    return await this.JugadorXPartidoRepository.save(nuevoRegistro);
  }

  async PartidosPorJugador(idJug: number){
    try{
      const response = await this.JugadorXPartidoRepository.find({
        where: [
          {idJugador: idJug},
          {idJugador2: idJug},
          {idJugador3: idJug},
          {idJugador4: idJug}
        ]
      })
      console.log('exito?', response)
      return response;
    } catch(error) {
      console.error('Error al crear el historial coso:', error);
      throw new Error('Error al crear cosocosin');
    }
  }
}

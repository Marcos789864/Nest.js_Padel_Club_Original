import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { JugadorXPartido } from './JugadorXPartido.entity';
import { JugadorXPartidoDto } from './dto/JugadorXPartido';

@Injectable()
export class JugadorXPartidoService {
  constructor(
    @InjectRepository(JugadorXPartido)
    private JugadorXPartidoRepository: Repository<JugadorXPartido>,
  ) {}

  Create(JugadorXPartido: JugadorXPartidoDto) {
    const partido = this.JugadorXPartidoRepository.create(JugadorXPartido);
    return this.JugadorXPartidoRepository.save(partido);
  }

  ObtenerJugadoresXPartido(id) {
    const partido = this.JugadorXPartidoRepository.find({
      where: [
        { idJugador: id },
        { idJugador2: id },
        { idJugador3: id },
        { idJugador4: id },
      ],
    });
    return partido;
  }
}

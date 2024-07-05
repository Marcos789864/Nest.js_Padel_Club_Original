import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Amigos } from './Amigos.entity';
import { AmigosDto } from './dto/AmigosDTO';

@Injectable()
export class AmigoService {
  constructor(
    @InjectRepository(Amigos) private amigosRepository: Repository<Amigos>,
  ) {}

  Create(Jugador: AmigosDto) {
    const newAmigo = this.amigosRepository.create(Jugador);
    return this.amigosRepository.save(newAmigo);
  }

  GetJugadores() {
    return this.amigosRepository.find();
  }

  GetAmigosJugador(id: number) {
    return this.amigosRepository.find({
      where: [{ id1: id }, { id2: id }],
    });
  }
}

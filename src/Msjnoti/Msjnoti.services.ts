import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Msj } from './Msjnoti.entity';

@Injectable()
export class AmigoService {
  constructor(
    @InjectRepository(Msj) private amigosRepository: Repository<Msj>,
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
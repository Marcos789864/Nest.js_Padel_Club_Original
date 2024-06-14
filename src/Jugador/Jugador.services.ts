import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { JugadorDto } from './dto/JugadorDto';
import { updateJugadorDto } from './dto/updateJugador.dto';
import { Jugador } from './Jugador.entity';

@Injectable()
export class JugadorService {
  constructor(
    @InjectRepository(Jugador) private jugadorRepository: Repository<Jugador>,
  ) {}

  Create(Jugador: JugadorDto) {
    const newJugador = this.jugadorRepository.create(Jugador);
    return this.jugadorRepository.save(newJugador);
  }

  GetJugadores() {
    return this.jugadorRepository.find();
  }

  UpdateJugador(id: number, jugador: updateJugadorDto) {
    this.jugadorRepository.update({ id }, jugador);
  }

  GetJugadorById(id: number) {
    this.jugadorRepository.findOne({
      where: {
        id: id,
      },
    });
  }
  Login(Gmail: string, Contraseña: string) {
    const jugador = this.jugadorRepository.findOne({
      where: {
        Gmail: Gmail,
        Contraseña: Contraseña,
      },
    });
    if (!jugador) {
      return new HttpException('El usuario no existe', HttpStatus.NOT_FOUND);
    } else {
    }
  }
}

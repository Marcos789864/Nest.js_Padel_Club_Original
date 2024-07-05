import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { JugadorDto } from './dto/JugadorDto';
import { updateJugadorDto } from './dto/updateJugador.dto';
import { Jugador } from './Jugador.entity';
import { LoginJugadorDTO } from 'src/Auth/dto/loginJugadorDTO';
import { RegisterJugadorDTO } from 'src/Auth/dto/registerJugadorDTO';

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

  async Login(info: LoginJugadorDTO) {
    const jugador = await this.jugadorRepository.findOne({
      where: {
        Gmail: info.Gmail,
        Contraseña: info.Contraseña,
      },
    });
    if (!jugador) {
      return 'El usuario no existe';
    } else {
      return 'Inicio Exitoso';
    }
  }

  async Register(register: RegisterJugadorDTO) {
    const registerJugador = await this.jugadorRepository.create(register);
    return this.jugadorRepository.save(registerJugador);
  }
}

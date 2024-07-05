import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { JugadorDto } from './dto/JugadorDto';
import { updateJugadorDto } from './dto/updateJugador.dto';
import { Jugador } from './Jugador.entity';
import { LoginJugadorDTO } from 'src/Auth/dto/loginJugadorDTO';
import { RegisterJugadorDTO } from 'src/Auth/dto/registerJugadorDTO';
import { createCipheriv, randomBytes, scrypt } from 'crypto';
import { promisify } from 'util';
import { jwtConstants } from 'src/Auth/entities/constant';

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
    const iv = randomBytes(16);
    const decipher = createCipheriv(info.Contraseña, jwtConstants.secret, iv);
    const decryptedText = Buffer.concat([
      decipher.update(info.Contraseña),
      decipher.final(),
    ]);
    info.Contraseña = decryptedText.toString();

    const jugador = await this.jugadorRepository.findOne({
      where: {
        Gmail: info.Gmail,
        Contraseña: info.Contraseña,
      },
    });
    if (!jugador) {
      return 'El usuario no existe';
    } else {
      return 'Contraseña incorrecta';
    }
  }

  async Register(register: RegisterJugadorDTO) {
    const iv = randomBytes(16);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const key = (await promisify(scrypt)(
      register.Contraseña,
      'salt',
      32,
    )) as Buffer;
    const cipher = createCipheriv('aes-256-ctr', jwtConstants.secret, iv);
    const encryptedText = Buffer.concat([
      cipher.update(register.Contraseña),
      cipher.final(),
    ]);
    register.Contraseña = encryptedText.toString();

    const registerJugador = await this.jugadorRepository.create(register);
    return this.jugadorRepository.save(registerJugador);
  }
}

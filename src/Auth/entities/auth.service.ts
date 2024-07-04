import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Jugador } from 'src/Jugador/Jugador.entity';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class AuthService {
  @InjectRepository(Jugador) private jugadorRepository: Repository<Jugador>;
  constructor(private jwtService: JwtService) {}

  async signIn(Gmail: string, Contraseña: string): Promise<any> {
    const user = await this.jugadorRepository.findOne({
      where: {
        Gmail: Gmail,
        Contraseña: Contraseña,
      },
    });
    if (user) {
      return new HttpException('El usuario no existe', HttpStatus.NOT_FOUND);
    } else {
      const payload = { Gmail: user.Gmail, Contraseña: user.Contraseña };
      return {
        access_Token: await this.jwtService.signAsync(payload),
      };
    }
  }
}

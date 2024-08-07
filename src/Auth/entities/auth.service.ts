import {
  Injectable,
  ExecutionContext,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Jugador } from 'src/Jugador/Jugador.entity';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { createCipheriv, createDecipheriv, randomBytes, scrypt } from 'crypto';
import { promisify } from 'util';
import { jwtConstants } from 'src/Auth/entities/constant';
@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Jugador)
    private jugadorRepository: Repository<Jugador>,
    private jwtService: JwtService,
  ) {}

  async signIn(Gmail: string, Contraseña: string): Promise<any> {
    const user = await this.jugadorRepository.findOne({
      where: {
        Gmail: Gmail,
      },
    });

    if (!user) {
      return 'Email no encontrado';
    }
    const ivBuffer = Buffer.from(user.iv, 'hex');

    const decipher = createDecipheriv(
      'aes-256-ctr',
      jwtConstants.secret,
      ivBuffer,
    );

    let decryptedText = decipher.update(user.Contraseña, 'hex', 'utf8');
    decryptedText += decipher.final('utf8');

    if (Contraseña !== decryptedText) {
      throw new Error(`Error con la contraseña`);
    } else {
      const payload = { Usuario: user };
      return {
        access_Token: await this.jwtService.signAsync(payload),
      };
    }
  }
  catch(error) {
    console.error('Error durante el inicio de sesión:', error);
    throw new Error('Error en el proceso de inicio de sesión');
  }

  async Register(register) {
    try {
      const iv = randomBytes(16);
      console.log('IV generado:', iv);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const key = (await promisify(scrypt)(
        register.Contraseña,
        'salt',
        32,
      )) as Buffer;
      const cipher = createCipheriv('aes-256-ctr', jwtConstants.secret, iv);
      const encryptedText = Buffer.concat([
        cipher.update(register.Contraseña, 'utf8'),
        cipher.final(),
      ]);
      const ivString = iv.toString('hex');

      register.Contraseña = encryptedText.toString('hex');
      register.iv = ivString;
      const registerJugador = await this.jugadorRepository.create(register);
      await this.jugadorRepository.save(registerJugador);

      return registerJugador;
    } catch (error) {
      console.error('Error durante el registro:', error);
      throw new Error('Error en el proceso de registro');
    }
  }

  async desEncriptarToken(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();
    const token = this.extractTokenFromHeader(request);
    if (!token) {
      throw new HttpException('Token nulo', HttpStatus.UNAUTHORIZED);
    }
    try {
      const payload = await this.jwtService.verifyAsync(token, {
        secret: jwtConstants.secret,
      });
      return payload;
    } catch {
      throw new HttpException('Token invalido', HttpStatus.UNAUTHORIZED);
    }
  }

  private extractTokenFromHeader(request: Request): string | undefined {
    const [type, token] = [
      request.headers.authorization.slice(0, 7),
      request.headers.authorization.slice(7),
    ];
    return type === 'Bearer' ? token : undefined;
  }
}

import {
  Body,
  Controller,
  HttpCode,
  HttpException,
  HttpStatus,
  Post,
  Get,
  Req,
} from '@nestjs/common';
import { AuthService } from './auth.services';
import { LoginJugadorDTO } from '../dto/loginJugadorDTO';
import { RegisterJugadorDTO } from '../dto/registerJugadorDTO';
import { Request } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() signInDto: LoginJugadorDTO) {
    return this.authService.signIn(signInDto.Gmail, signInDto.Contraseña);
  }

  @Post('register')
  register(@Body() registerDto: RegisterJugadorDTO) {
    {
      return this.authService.Register(registerDto);
    }
  }

  @Post('Decode')
  async Decode(@Req() request: Request) {
    const token = this.extractTokenFromHeader(request);
    if (!token) {
      throw new HttpException(
        'Token no proporcionado',
        HttpStatus.UNAUTHORIZED,
      );
    }
    return this.authService.desEncriptarToken(token);
  }

  private extractTokenFromHeader(request: Request): string | undefined {
    const authorizationHeader = request.headers['authorization'];
    if (authorizationHeader) {
      const [type, token] = authorizationHeader.split(' ');
      return type === 'Bearer' ? token : undefined;
    }
    return undefined;
  }
  @Get('H')
  async H() {
    return 'H';
  }
}

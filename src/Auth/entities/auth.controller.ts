import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginJugadorDTO } from '../dto/loginJugadorDTO';
import { RegisterJugadorDTO } from '../dto/registerJugadorDTO';

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
}

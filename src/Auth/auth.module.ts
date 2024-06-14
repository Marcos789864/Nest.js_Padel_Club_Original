import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from '../Auth/auth.controller';
import { JugadorModule } from '../Jugador/Jugador.modules';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from '../Auth/constant';

@Module({
  imports: [
    JugadorModule,
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '1h' },
    }),
  ],
  providers: [AuthService],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}

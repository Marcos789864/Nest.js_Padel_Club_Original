import { Module } from '@nestjs/common';
import { JugadorModule } from 'src/Jugador/Jugador.modules';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { jwtConstants } from './constant';
import { AuthService } from './auth.service';

@Module({
  imports: [
    JugadorModule,
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  providers: [AuthService],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}

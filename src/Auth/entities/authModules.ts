import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { jwtConstants } from './constant';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthService } from './auth.services';
import { Jugador } from 'src/Jugador/Jugador.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Jugador]),
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

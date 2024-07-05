import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AmigosController } from './Amigos.controller';
import { Amigos } from './Amigos.entity';
import { AmigoService } from './Amigos.services';
@Module({
  imports: [TypeOrmModule.forFeature([Amigos])],
  providers: [AmigoService],
  controllers: [AmigosController],
})
export class AmigosModule {}

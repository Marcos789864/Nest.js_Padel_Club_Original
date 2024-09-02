import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MsjnotiService } from './Msjnoti.services';
import { MsjnotiController } from './Msjnoti.controller';
import { Msjnoti } from './Msjnoti.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Msjnoti])],
  providers: [MsjnotiService],
  controllers: [MsjnotiController],
  exports: [MsjnotiService],
})
export class MsjnotiModule {}

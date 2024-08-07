import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NotificacionesService } from './Notificaciones.services';
import { NotificacionesController } from './Notificaciones.controller';
import { Notificaciones } from './Notificaciones.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Notificaciones])],
  providers: [NotificacionesService],
  controllers: [NotificacionesController],
  exports: [NotificacionesService],
})
export class NotificacionesModule {}

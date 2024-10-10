import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Notificaciones } from './Notificaciones.entity';

@Injectable()
export class NotificacionesService {
  constructor(
    @InjectRepository(Notificaciones)
    private notificacionesRepository: Repository<Notificaciones>,
  ) {}

  Create(Notificacion) {
    const newNotificacion = this.notificacionesRepository.create(Notificacion);
    return this.notificacionesRepository.save(newNotificacion);
  }

  GetNotificaciones() {
    return this.notificacionesRepository.find();
  }

  GetNotificacion(id) {
    return this.notificacionesRepository.find({
      where: {
        idR: id,
      },
    });
  }

  GetNotificacionId(idNoti) {
    return this.notificacionesRepository.findOne({
      where: {
        id: idNoti,
      },
    });
  }
}

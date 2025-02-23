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

  async Create(Notificacion) {
    try{
      const newNotificacion = this.notificacionesRepository.create(Notificacion);
      return await this.notificacionesRepository.save(newNotificacion);
    } catch (error) {
      console.error('Error al crear el notificacion:', error);
      throw new Error('Error al crear el waaaaaaaaaawaaaaaaaaaaaa ayuda');
    }
    
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

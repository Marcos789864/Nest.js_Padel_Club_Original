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

  async VerNotificacion(id){
    try{
      const newNoti = this.notificacionesRepository.update(id,{
        Vista: true
      })
      console.log(newNoti);
      return newNoti;
    } catch(error){
      console.log('Error al modificar la notificacion:', error);
      throw new Error('Me canse odio tantas preguntas');
    }
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

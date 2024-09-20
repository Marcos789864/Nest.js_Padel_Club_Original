import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Msjnoti } from './Msjnoti.entity';
import { MsjnotiDto } from './dto/Msjnoti.dto';

@Injectable()
export class MsjnotiService {
  constructor(
    @InjectRepository(Msjnoti) private MsjnotiRepository: Repository<Msjnoti>,
  ) {}

  Create(Msjnoti: MsjnotiDto) {
    const newNoti = this.MsjnotiRepository.create(Msjnoti);
    return this.MsjnotiRepository.save(newNoti);
  }

  GetNotificacionesJugador(id: number) {
    return this.MsjnotiRepository.find({
      where: [{ idR: id }],
    });
  }
}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Msjnoti, Tipo } from './Msjnoti.entity';
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

  ObtenerMensajePorTipo(tipo: Tipo) {
    const noti = this.MsjnotiRepository.findOne({
      where: { tipo },
    });
    return noti;
  }
}

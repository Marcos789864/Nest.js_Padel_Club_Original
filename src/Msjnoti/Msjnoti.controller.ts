import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';

import { AuthGuard } from 'src/auth.guard';
import { MsjnotiService } from './Msjnoti.services';
import { MsjnotiDto } from './dto/Msjnoti.dto';
import { Tipo } from 'src/Notificaciones/Notificaciones.entity';

@Controller('Msjnoti')
export class MsjnotiController {
  constructor(private msjnotiService: MsjnotiService) {}
  @UseGuards(AuthGuard)
  @Post()
  async create(@Body() createMsjnoti: MsjnotiDto) {
    return this.msjnotiService.Create(createMsjnoti);
  }
  @UseGuards(AuthGuard)
  @Get(':Tipo')
  async ObtenerMensajePorTipo(@Param('Tipo') tipo: Tipo) {
    return this.msjnotiService.ObtenerMensajePorTipo(tipo);
  }
}

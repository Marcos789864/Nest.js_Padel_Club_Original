import {
  Body,
  Controller,
  Post,
  Get,
  Param,
  ParseIntPipe,
  UseGuards,
} from '@nestjs/common';

import { AuthGuard } from 'src/auth.guard';
import { MsjnotiService } from './Msjnoti.services';
import { MsjnotiDto} from './dto/Msjnoti.dto';

@Controller('Msjnoti')
export class MsjnotiController {
constructor(private msjnotiService: MsjnotiService) {}
  @UseGuards(AuthGuard)
  @Post()
  async create(@Body() createMsjnoti: MsjnotiDto) {
    return this.msjnotiService.Create(createMsjnoti);
  }


  @UseGuards(AuthGuard)
  @Get(':idJugador')
  async BuscarAmigosJugador(
    @Param('idJugador', ParseIntPipe) idJugador: number,
  ) {
    return this.msjnotiService.GetNotificacionesJugador(idJugador);
  }
}

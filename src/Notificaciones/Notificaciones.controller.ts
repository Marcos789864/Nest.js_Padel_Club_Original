import {
  Body,
  Controller,
  Get,
  Post,
  Param,
  ParseIntPipe,
  UseGuards,
} from '@nestjs/common';
import { NotificacionesService } from './Notificaciones.services';
import { NotificacionesDto } from './dto/NotificacionesDto';
import { AuthGuard } from 'src/auth.guard';

@Controller('Notificaciones')
export class NotificacionesController {
  constructor(private notificacionesService: NotificacionesService) {}

  @UseGuards(AuthGuard)
  @Get()
  async ObtnerNotificaciones() {
    return this.notificacionesService.GetNotificaciones();
  }
  @UseGuards(AuthGuard)
  @Get(':id')
  async ObtenerNotificacionbyRecepetor(@Param('id', ParseIntPipe) id: number) {
    return this.notificacionesService.GetNotificacion(id);
  }
  @UseGuards(AuthGuard)
  @Post()
  async CrearNotificacion(@Body() signInDto: NotificacionesDto) {
    return this.notificacionesService.Create(signInDto);
  }

  @UseGuards(AuthGuard)
  @Get('infoNotificacion/:id')
  async GetInfoNotificacionById(@Param('id', ParseIntPipe) id: number) {
    console.log('numero id noti' + id);
    return this.notificacionesService.GetNotificacionId(id);
  }
}

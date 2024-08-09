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
  async ObtenerNotificacion(@Param('id', ParseIntPipe) id: number) {
    return this.notificacionesService.GetNotificacion(id);
  }
  @UseGuards(AuthGuard)
  @Post()
  async CrearNotificacion(@Body() signInDto: NotificacionesDto) {
    return this.notificacionesService.Create(signInDto);
  }
}

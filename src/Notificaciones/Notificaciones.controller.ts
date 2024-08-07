import {
    Body,
    Controller,
    Get,
    Post,
    Patch,
    Param,
    ParseIntPipe,
  } from '@nestjs/common';
  import { NotificacionesService } from './Notificaciones.services';
  import { NotificacionesDto } from './dto/NotificacionesDto';
  
  @Controller('Notificaciones')
  export class NotificacionesController {
    constructor(private notificacionesService: NotificacionesService) {}
  
    @Get()
    async ObtnerNotificaciones() {
      return this.notificacionesService.GetNotificaciones();
    }

    @Get(':id')
    async ObtenerNotificacion(@Param('id', ParseIntPipe) id: number)
    {
        return this.notificacionesService.GetNotificacion(id);
    }

    @Post()
    async CrearNotificacion(@Body() signInDto: NotificacionesDto){
        return this.notificacionesService.Create(signInDto);
    }
   
}
  
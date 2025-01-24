import {
  Body,
  Controller,
  Post,
  Get,
  ParseIntPipe,
  Param,
} from '@nestjs/common';
import { PartidoDto } from './dto/PartidoPendienteDto';
import { PartidoService } from './Partido.service';
@Controller('Partido')
export class PartidoController {
  constructor(private partidoService: PartidoService) {}

  @Post()
  async create(@Body() createPartidoDto: PartidoDto) {
    try {
      console.log('Solicitud recibida:', createPartidoDto);

      const resultado =
        await this.partidoService.CreatePartido(createPartidoDto);
      return { mensaje: 'Partido creado correctamente', partido: resultado };
    } catch (error) {
      console.error('Error al crear el partido:', error);
      throw new Error('Error al crear el partido');
    }
  }

  @Get(':idGrupo')
  async GetPartidoByIdGrupo(@Param() idGrupo: number) {
    try {
      const result = await this.partidoService.GetPartidoByIdGrupo(idGrupo);
      return result;
    } catch (error) {
      console.error('Error al crear el partido:', error);
      throw new Error('Error al crear el partido');
    }
  }

  @Post('Historial')
  async getPartidos(@Body('id', ParseIntPipe) id: number) {
    try {
      const response = await this.partidoService.GetPartidoById(id);
      return JSON.stringify(response, null, 2);
    } catch (error) {
      console.log('Error al obtener partidos');
    }
  }
}

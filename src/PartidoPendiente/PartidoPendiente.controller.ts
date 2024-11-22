import {
  Body,
  Controller,
  Post,
  Get,
  ParseIntPipe,
  Param,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { PartidoPendienteDto } from './dto/PartidoPendienteDto';
import { PartidoPendienteService } from './PartidoPendiente.service';

@Controller('PartidoPendiente')
export class PartidoPendienteController {
  constructor(private partidoPendienteService: PartidoPendienteService) {}

  @Post()
  async create(@Body() createPartidoDto: PartidoPendienteDto) {
    try {
      console.log('Solicitud recibida:', createPartidoDto);

      const resultado =
        await this.partidoPendienteService.CreatePartido(createPartidoDto);
      return { mensaje: 'Partido creado correctamente', partido: resultado };
    } catch (error) {
      console.error('Error al crear el partido:', error);
      throw new Error('Error al crear el partido');
    }
  }

  @Get(':idGrupo')
  async GetPartidoByIdGrupo(@Param('idGrupo') idGrupo: number) {
    try {
      const result =
        await this.partidoPendienteService.GetPartidoByIdGrupo(idGrupo);
      return result;
    } catch (error) {
      console.error('Error al crear el partido:', error);
      throw new Error('Error al buscar partido');
    }
  }

}

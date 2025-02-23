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

  @Get(':idEquipo1/:idEquipo2')
  async getGrupoJugadores(
    @Param('idEquipo1', ParseIntPipe) idEquipo1: number,
    @Param('idEquipo2', ParseIntPipe) idEquipo2: number,
  ) {
    try {
      const { jugadores } =
        await this.partidoPendienteService.getGrupoJugadores(
          idEquipo1,
          idEquipo2,
        );

      return { jugadores };
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw new BadRequestException(error.message);
      }
      throw new BadRequestException(
        'Error al obtener el registro de JugadorXGrupo',
      );
    }
  }

  @Get(':idPartido')
  async GetPartidoById(@Param('idPartido') idPartido: number) {
    try {
      const result =
        await this.partidoPendienteService.GetPartidoById(idPartido);
      return result;
    } catch (error) {
      console.error('Error al crear el partido:', error);
      throw new Error('Error al buscar partido');
    }
  }
}

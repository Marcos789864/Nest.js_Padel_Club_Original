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

  @Get(':idEquipo1/:idEquipo2')
  async getGrupoJugadores(
    @Param('idEquipo1', ParseIntPipe) idEquipo1: number,
    @Param('idEquipo2', ParseIntPipe) idEquipo2: number,
  ) {
    try {
      // Utiliza ambos parámetros para obtener la información necesaria
      const { jugadores } = await this.partidoService.getGrupoJugadores(
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
}

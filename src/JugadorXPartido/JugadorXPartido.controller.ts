import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/auth.guard';
import { JugadorXPartidoService } from './JugadorXPartido.services';
import { JugadorXPartidoDto } from './dto/JugadorXPartido';

@Controller('JugadorXPartido')
export class JugadorXPartidoController {
  constructor(private jugadorXPartidoServices: JugadorXPartidoService) {}

  @UseGuards(AuthGuard)
  @Post('crear')
  async create(@Body() JugadorXPartido: JugadorXPartidoDto) {
    try{
      console.log('Solicitud recibida:', JugadorXPartido);
      const resultado =
        await this.jugadorXPartidoServices.Create(JugadorXPartido);
      return { mensaje: 'JugadorXP anda correctamente', jxp: resultado }
    } catch (error) {
      console.error('Error al crear el cosososos:', error);
      throw new Error('Error al crear cosasaosao');
    }
  }
  @Get('jugador/:id')
  async obtenerPartidos(@Param('id') id: number) {
    try{
      console.log('Solicitud recibida: id = ', id);
      const resultado = await this.jugadorXPartidoServices.PartidosPorJugador(Number(id)); 
      return resultado;
    } catch(error) {
      console.error('Error malo malito:', error);
      throw new Error('Error al crear malito');
    }
    
  }
  
  @UseGuards(AuthGuard)
  @Get(':idPartido')
  async ObtenerJugadorPorPartido(@Param('idPartido') idPartido: number) {
    return this.jugadorXPartidoServices.ObtenerJugadoresXPartido(idPartido);
  }

  @UseGuards(AuthGuard)
  @Post('agregar')
  async AgregarJugadorXPartido(@Body() jugadorXPartidoDto: JugadorXPartidoDto) {
    return this.jugadorXPartidoServices.AgregarJugadorXPartido(jugadorXPartidoDto);
  }
}

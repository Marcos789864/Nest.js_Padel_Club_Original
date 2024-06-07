import { Body, Controller, Post, Get } from '@nestjs/common';
import { JugadorDto } from './dto/JugadorDto';
import { JugadorService } from './Jugador.services';
import { Jugador } from './interface/jugador.interface';

@Controller('jugador')
export class JugadorController {
  constructor(private jugadorService: JugadorService) {}

  @Post()
  async create(@Body() createJugadorDto: JugadorDto) {
    this.jugadorService.create(createJugadorDto);
  }

  @Get()
  async findAll(): Promise<Jugador[]> {
    return this.jugadorService.findAll();
  }
}

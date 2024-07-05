import {
  Body,
  Controller,
  Post,
  Get,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { AmigosDto } from './dto/AmigosDTO';
import { AmigoService } from './Amigos.services';

@Controller('Amigos')
export class AmigosController {
  constructor(private amigoService: AmigoService) {}
  @Post()
  async create(@Body() createAmistadDto: AmigosDto) {
    return this.amigoService.Create(createAmistadDto);
  }
  @Get()
  async BuscarJugador() {
    return this.amigoService.GetJugadores();
  }

  @Get(':idJugador')
  async BuscarAmigosJugador(
    @Param('idJugador', ParseIntPipe) idJugador: number,
  ) {
    return this.amigoService.GetAmigosJugador(idJugador);
  }
}

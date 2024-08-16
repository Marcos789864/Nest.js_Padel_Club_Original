import {
  Body,
  Controller,
  Post,
  Get,
  Param,
  ParseIntPipe,
  UseGuards,
} from '@nestjs/common';

import { AuthGuard } from 'src/auth.guard';

@Controller('Msjnoti')
export class AmigosController {
constructor(private amigoService: AmigoService) {}
  @UseGuards(AuthGuard)
  @Post()
  async create(@Body() createAmistadDto: AmigosDto) {
    return this.amigoService.Create(createAmistadDto);
  }
  @UseGuards(AuthGuard)
  @Get()
  async BuscarJugador() {
    return this.amigoService.GetJugadores();
  }

  @UseGuards(AuthGuard)
  @Get(':idJugador')
  async BuscarAmigosJugador(
    @Param('idJugador', ParseIntPipe) idJugador: number,
  ) {
    return this.amigoService.GetAmigosJugador(idJugador);
  }
}

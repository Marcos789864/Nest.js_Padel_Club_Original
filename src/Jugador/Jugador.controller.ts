import {
  Body,
  Controller,
  Post,
  Get,
  Patch,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { JugadorService } from './Jugador.services';
import { updateJugadorDto } from './dto/updateJugador.dto';
import { LoginJugadorDTO } from 'src/Auth/dto/loginJugadorDTO';
import { RegisterJugadorDTO } from 'src/Auth/dto/registerJugadorDTO';

@Controller('Jugador')
export class JugadorController {
  constructor(private jugadorService: JugadorService) {}

  @Get()
  async BuscarJugador() {
    return this.jugadorService.GetJugadores();
  }

  @Patch(':id')
  async updateJugador(
    @Param('id', ParseIntPipe) id: number,
    @Body() jugador: updateJugadorDto,
  ) {
    return this.jugadorService.UpdateJugador(id, jugador);
  }

  @Get(':id')
  async GetJugadorById(@Param('id', ParseIntPipe) id: number) {
    return this.jugadorService.GetJugadorById(id);
  }

  @Post('Login')
  async Login(@Body() login: LoginJugadorDTO) {
    return this.jugadorService.Login(login);
  }

  @Post('Register')
  async create(@Body() createJugadorDto: RegisterJugadorDTO) {
    return this.jugadorService.Register(createJugadorDto);
  }
}

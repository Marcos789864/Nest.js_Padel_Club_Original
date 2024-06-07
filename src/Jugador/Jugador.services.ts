import { Injectable } from '@nestjs/common';
import { Jugador } from './interface/jugador.interface';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class JugadorService {
  constructor(private configService: ConfigService) {}
  private readonly jugadores: Jugador[] = [];

  create(jugador: Jugador) {
    this.jugadores.push(jugador);
  }

  findAll(): Jugador[] {
    return this.jugadores;
  }
}

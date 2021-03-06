import { Game } from '../../models/game.model';
import { Injectable } from '@angular/core';
import { UserService } from '../../servicios/user.service';
import { Juego } from '../../clases/juego';
import { JuegoPrimos } from './juego-primos';

@Injectable({
  providedIn: 'root'
})
export class PrimoService {

  constructor(public _userService: UserService) {
  }

  saveGame(puntos: number) {
    const game: Game = {
      nombre: 'Primos',
      cantidadPuntos: puntos,
      hora: new Date(),
      jugador: this._userService.user.username,
      gano: true
    };

    const lista = JSON.parse(localStorage.getItem('lista')) || [];
    lista.push(game);
    localStorage.setItem('lista', JSON.stringify(lista));
  }
}

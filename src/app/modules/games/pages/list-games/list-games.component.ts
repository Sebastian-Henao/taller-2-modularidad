import { Component, OnInit, inject } from '@angular/core';
import { Game } from '../../interfaces/game.interface';
import { GamesService } from '../../services/games.service';

/**
 * Página principal del listado de juegos.
 *
 * Coordina la consulta a FreeToGame y entrega los resultados al componente
 * encargado de renderizar la tabla.
 */
@Component({
  selector: 'app-list-games',
  template: `<app-table-games [games]="games"></app-table-games>`,
  standalone: false,
})
export class ListGamesComponent implements OnInit {
  /** Listado de juegos recibido desde la API de FreeToGame. */
  games: Game[] = [];

  /** Servicio responsable de consultar los juegos en la API externa. */
  private gamesService = inject(GamesService);

  /** Carga los juegos cuando Angular inicializa la página. */
  ngOnInit(): void {
    this.gamesService.getAllGames().subscribe({
      next: (games) => this.games = games,
      error: (error) => console.error(error),
    });
  }
}
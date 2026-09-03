import { Component, Input } from '@angular/core';
import { Game } from '../../interfaces/game.interface';

/**
 * Componente encargado de presentar los juegos recibidos desde la API.
 */
@Component({
  selector: 'app-table-games',
  templateUrl: './table-games.component.html',
  styleUrl: './table-games.component.scss',
  standalone: false,
})
export class TableGamesComponent {
  /** Lista de juegos que se muestran en la tabla. */
  @Input() games: Game[] = [];

  /**
   * Devuelve una imagen utilizable para la miniatura del juego.
   * @param thumbnail URL de la miniatura entregada por la API.
   * @returns La URL recibida o una imagen transparente como respaldo.
   */
  getThumbnail(thumbnail: string): string {
    return thumbnail || 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=';
  }
}
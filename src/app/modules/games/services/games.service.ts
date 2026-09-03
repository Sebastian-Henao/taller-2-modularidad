import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Game } from '../interfaces/game.interface';

/**
 * Servicio encargado de gestionar y consumir la información de juegos desde la API de FreeToGame.
 *
 * @remarks
 * Utiliza `HttpClient` para realizar peticiones HTTP asíncronas y obtener datos en tiempo real.
 */
@Injectable({
  providedIn: 'root',
})
export class GamesService {
  /** URL base de la API externa de FreeToGame */
  private readonly apiUrl = 'https://www.freetogame.com/api/games';

  constructor(private http: HttpClient) {}

  /**
   * Obtiene el listado completo de juegos desde la API.
   *
   * @returns Observable con el arreglo de juegos (`Game[]`).
   */
  getAllGames(): Observable<Game[]> {
    return this.http.get<Game[]>(this.apiUrl);
  }
}

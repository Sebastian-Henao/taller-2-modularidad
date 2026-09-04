import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Catalogo } from '../interfaces/catalogo.interface';

/**
 * Servicio de acceso al catálogo de videojuegos.
 *
 * Encapsula las peticiones HTTP a FreeToGame para que los componentes
 * no dependan directamente de la URL ni de los detalles de transporte.
 */
@Injectable({
  providedIn: 'root',
})
export class CatalogoService {
  /** Endpoint público con el listado de videojuegos gratuitos. */
  private readonly apiUrl = 'https://www.freetogame.com/api/games';

  /**
   * Crea el servicio con el cliente HTTP de Angular.
   * @param http Cliente utilizado para realizar peticiones a FreeToGame.
   */
  constructor(private http: HttpClient) {}

  /**
   * Obtiene todos los videojuegos disponibles.
   * @returns Observable con los videojuegos tipados del catálogo.
   */
  getAllGames(): Observable<Catalogo[]> {
    return this.http.get<Catalogo[]>(this.apiUrl);
  }
}

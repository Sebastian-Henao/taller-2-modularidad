import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CATALOGO_DATA } from '../../../core/config/catalogo.config';
import { Catalogo } from '../interfaces/catalogo.interface';

/**
 * Servicio de acceso al catálogo de videojuegos.
 *
 * Proporciona acceso a los datos centralizados en el Core para que los
 * componentes no dependan directamente de la fuente de datos.
 */
@Injectable({
  providedIn: 'root',
})
export class CatalogoService {
  /**
   * Obtiene todos los videojuegos disponibles.
   * @returns Observable con los videojuegos tipados del Core.
   */
  getAllGames(): Observable<Catalogo[]> {
    return of(CATALOGO_DATA);
  }
}

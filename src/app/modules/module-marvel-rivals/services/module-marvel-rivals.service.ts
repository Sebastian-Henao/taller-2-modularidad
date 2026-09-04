import { Injectable } from '@angular/core';
import { MarvelRivals } from '../interfaces/module-marvel-rivals.interface';
import { Observable, of } from 'rxjs';
import { MARVEL_RIVALS_DATA } from '../../../core/config/marvel-rivals.config';

/**
 * Servicio para gestionar los personajes de Marvel Rivals.
 *
 * Proporciona acceso al listado de héroes disponibles en la aplicación,
 * permitiendo que los componentes de la vista consuman la información
 * centralizada en `MARVEL_RIVALS_DATA`.
 *
 * @remarks
 * Este servicio está registrado a nivel raíz (`providedIn: 'root'`) y puede
 * ser inyectado en cualquier componente del módulo que necesite consultar el
 * catálogo de personajes.
 *
 * @example
 * ```ts
 * constructor(private marvelRivalsService: ModuleMarvelRivalsService) {}
 *
 * ngOnInit() {
 *   this.marvelRivalsService.getAllRivals().subscribe(characters => {
 *     console.log(characters);
 *   });
 * }
 * ```
 */
@Injectable({
  providedIn: 'root',
})
export class ModuleMarvelRivalsService {
  /**
   * Obtiene todos los personajes disponibles del módulo Marvel Rivals.
   *
   * @returns Observable con el listado de héroes (`MarvelRivals[]`).
   */
  getAllRivals(): Observable<MarvelRivals[]> {
    return of(MARVEL_RIVALS_DATA);
  }
}
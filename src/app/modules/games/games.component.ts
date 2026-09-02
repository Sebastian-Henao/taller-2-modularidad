import { Component } from '@angular/core';

/**
 * Componente contenedor principal de la sección de juegos.
 *
 * Este componente funciona como contenedor de todas las rutas relacionadas
 * con los juegos, mostrando sus componentes hijos dentro del `<router-outlet>`.
 *
 * @remarks
 * Forma parte de la capa de presentación del módulo de juegos.
 */
@Component({
  selector: 'app-games',
  template: `<router-outlet></router-outlet>`,
  standalone: false,
})
export class GamesComponent { }

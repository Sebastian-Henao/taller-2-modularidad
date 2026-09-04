import { Component } from '@angular/core';

/**
 * Componente contenedor de la sección de Marvel Rivals.
 *
 * Este componente funciona como contenedor de todas las rutas relacionadas
 * con el módulo, mostrando los componentes hijos dentro del `<router-outlet>`.
 *
 * @remarks
 * Forma parte de la capa de presentación y sirve como punto de entrada del
 * módulo para la navegación interior del contenido de Marvel Rivals.
 *
 * @example
 * ```html
 * <app-marvel-rivals.component></app-marvel-rivals.component>
 * ```
 */
@Component({
  selector: 'app-marvel-rivals.component',
  standalone: false,
  template: '<router-outlet></router-outlet>',
})
export class MarvelRivalsComponent { }

import { Component } from '@angular/core';

/**
 * Componente contenedor del módulo de sistemas de diseño.
 *
 * Se encarga de presentar el componente de tabla que utilizará el módulo
 * para mostrar la información de los sistemas de diseño. Por el momento,
 * la tabla se muestra sin datos.
 *
 * @example
 * ```html
 * <app-list-sistemas-de-diseno></app-list-sistemas-de-diseno>
 * ```
 */
@Component({
  selector: 'app-list-sistemas-de-diseno',
  standalone: false,
  template: `<app-table-sistemas-de-diseno></app-table-sistemas-de-diseno>`,
})
export class ListSistemasDeDisenoComponent {

}

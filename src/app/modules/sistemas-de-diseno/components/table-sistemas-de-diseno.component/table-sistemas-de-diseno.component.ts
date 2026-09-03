import { Component } from '@angular/core';
import { SISTEMAS_DE_DISENO } from '../../../../core/config/sistemas-de-diseno.config';
import { SistemaDeDisenoInterface } from '../../interfaces/sistema-de-diseno.interface';

/**
 * Componente de tabla de sistemas de diseño.
 *
 * Representa el espacio de presentación donde se mostrará la información
 * de los sistemas de diseño cuando el modelo y la fuente de datos estén
 * definidos.
 *
 * @remarks
 * Actualmente funciona como una estructura visual vacía y forma parte de
 * la capa de presentación del módulo.
 *
 * @example
 * ```html
 * <app-table-sistemas-de-diseno></app-table-sistemas-de-diseno>
 * ```
 */
@Component({
  selector: 'app-table-sistemas-de-diseno',
  standalone: false,
  templateUrl: './table-sistemas-de-diseno.component.html',
})
export class TableSistemasDeDisenoComponent {
  /** Información que se muestra en las secciones del módulo. */
  sistemaDeDiseno: SistemaDeDisenoInterface = SISTEMAS_DE_DISENO;
}

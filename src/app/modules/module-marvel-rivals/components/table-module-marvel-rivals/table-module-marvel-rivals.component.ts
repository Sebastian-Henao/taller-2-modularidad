import { Component, Input } from '@angular/core';
import { MarvelRivals, RolCategoria } from '../../interfaces/module-marvel-rivals.interface';
import { BadgeType } from '../../../shared/interfaces/badge.interface';

/**
 * Componente de tabla de personajes de Marvel Rivals.
 *
 * Se utiliza para mostrar un listado de héroes en una tabla,
 * incluyendo información como nombre, alias, equipo, habilidad y rol.
 *
 * @remarks
 * Este componente recibe los personajes desde un componente padre a través
 * del Input `moduleMarvelRivals` y utiliza el mapeo `categoryMap` para asignar
 * colores a los badges según el rol del personaje.
 *
 * Forma parte de la capa de presentación y se considera un componente visual
 * del módulo que expone la información de manera legible para el usuario.
 *
 * @example
 * ```html
 * <app-table-module-marvel-rivals [moduleMarvelRivals]="characters"></app-table-module-marvel-rivals>
 * ```
 */
@Component({
  selector: 'app-table-module-marvel-rivals',
  standalone: false,
  templateUrl: './table-module-marvel-rivals.component.html',
  styleUrl: './table-module-marvel-rivals.component.scss',
})
export class TableModuleMarvelRivalsComponent {
  /**
   * Listado de personajes que se mostrarán en la tabla.
   * @type {MarvelRivals[]}
   * @remarks
   * Este Input permite pasar un array de personajes desde un componente padre,
   * generalmente `ListModuleMarvelRivalsComponent`.
   */
  @Input() moduleMarvelRivals: MarvelRivals[] = [];

  /**
   * Mapeo de roles de personajes a tipos de Badge.
   * @type {Record<RolCategoria, BadgeType>}
   * @remarks
   * Se utiliza para asignar colores a los badges según el rol del personaje:
   * - 'Vanguardia' → 'primary'
   * - 'Duelista' → 'danger'
   * - 'Estratega' → 'info'
   * - 'Variable' → 'warning'
   */
  categoryMap: Record<RolCategoria, BadgeType> = {
    'Vanguardia': 'primary',
    'Duelista': 'danger',
    'Estratega': 'info',
    'Variable': 'warning',
  };
}

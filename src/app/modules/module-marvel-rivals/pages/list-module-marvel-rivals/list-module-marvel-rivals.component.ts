import { Component, inject } from '@angular/core';
import { MarvelRivals } from '../../interfaces/module-marvel-rivals.interface';
import { ModuleMarvelRivalsService } from '../../services/module-marvel-rivals.service';

/**
 * Componente de listado de personajes de Marvel Rivals.
 *
 * Se encarga de consumir el servicio `ModuleMarvelRivalsService` para obtener
 * el catálogo de personajes y pasarlo al componente de tabla `TableModuleMarvelRivalsComponent`.
 *
 * @remarks
 * Este componente forma parte de la capa de presentación y se encarga de la
 * carga inicial del listado que luego será renderizado en la vista.
 *
 * @example
 * ```html
 * <app-list-module-marvel-rivals.component></app-list-module-marvel-rivals.component>
 * ```
 */
@Component({
  selector: 'app-list-module-marvel-rivals.component',
  standalone: false,
  template: '<app-table-module-marvel-rivals [moduleMarvelRivals]="moduleMarvelRivals"></app-table-module-marvel-rivals>',
})
export class ListModuleMarvelRivalsComponent {
  /**
   * Listado de personajes obtenidos desde el servicio.
   * @type {MarvelRivals[]}
   */
  moduleMarvelRivals: MarvelRivals[] = [];

  /**
   * Servicio para obtener los personajes del módulo.
   * @remarks
   * Se inyecta utilizando la función `inject()` de Angular.
   */
  private moduleMarvelRivalsService = inject(ModuleMarvelRivalsService);

  /**
   * Inicializa el componente y carga los personajes.
   * @remarks
   * Se suscribe al método `getAllRivals()` del servicio y asigna los datos
   * recibidos a la propiedad `moduleMarvelRivals`.
   */
  ngOnInit(): void {
    this.moduleMarvelRivalsService.getAllRivals().subscribe({
      next: (moduleMarvelRivals) => this.moduleMarvelRivals = moduleMarvelRivals,
      error: (error) => console.error(error),
    });
  }
}

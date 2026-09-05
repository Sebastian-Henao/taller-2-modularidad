import { Component } from '@angular/core';

/**
 * Componente contenedor del módulo de catálogo.
 *
 * Su plantilla aloja el componente asociado a la ruta interna activa.
 */
@Component({
  selector: 'app-catalogo',
  standalone: false,
  template: '<router-outlet></router-outlet>',
})
export class CatalogoComponent {}

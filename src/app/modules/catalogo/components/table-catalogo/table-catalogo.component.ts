import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Catalogo } from '../../interfaces/catalogo.interface';

/** Presenta los videojuegos filtrados en una tabla de resultados. */
@Component({
  selector: 'app-table-catalogo',
  standalone: false,
  templateUrl: './table-catalogo.component.html',
})
export class TableCatalogoComponent {
  /** Videojuegos que se muestran en las filas de la tabla. */
  @Input() games: Catalogo[] = [];
}

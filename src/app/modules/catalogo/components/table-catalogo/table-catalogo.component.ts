import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Catalogo } from '../../interfaces/catalogo.interface';

@Component({
  selector: 'app-table-catalogo',
  standalone: false,
  templateUrl: './table-catalogo.component.html',
})
export class TableCatalogoComponent {
  @Input() games: Catalogo[] = [];
}

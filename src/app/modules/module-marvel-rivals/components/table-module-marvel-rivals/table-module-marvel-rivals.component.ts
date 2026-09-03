import { Component, Input } from '@angular/core';
import { MarvelRivals, RolCategoria } from '../../interfaces/module-marvel-rivals.interface';
import { BadgeType } from '../../../shared/interfaces/badge.interface';

@Component({
  selector: 'app-table-module-marvel-rivals',
  standalone: false,
  templateUrl: './table-module-marvel-rivals.component.html',
  styleUrl: './table-module-marvel-rivals.component.scss',
})
export class TableModuleMarvelRivalsComponent {
  @Input() moduleMarvelRivals: MarvelRivals[] = []; 

  categoryMap: Record<RolCategoria, BadgeType> = {
    'Vanguardia': 'primary',
    'Duelista': 'danger',
    'Estratega': 'info',
    'Variable': 'warning',
  };
}

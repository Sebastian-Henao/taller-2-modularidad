import { Component, inject } from '@angular/core';
import { MarvelRivals } from '../../interfaces/module-marvel-rivals.interface';
import { ModuleMarvelRivalsService } from '../../services/module-marvel-rivals.service';

@Component({
  selector: 'app-list-module-marvel-rivals.component',
  standalone: false,
  templateUrl: './list-module-marvel-rivals.component.html',
  styleUrl: './list-module-marvel-rivals.component.scss',
})
export class ListModuleMarvelRivalsComponent {
  moduleMarvelRivals: MarvelRivals[] = [];
  private moduleMarvelRivalsService = inject(ModuleMarvelRivalsService);
  ngOnInit(): void {
    this.moduleMarvelRivalsService.getAllRivals().subscribe({
      next: (moduleMarvelRivals) => this.moduleMarvelRivals = moduleMarvelRivals,
      error: (error) => console.error(error),
    });
  }
}

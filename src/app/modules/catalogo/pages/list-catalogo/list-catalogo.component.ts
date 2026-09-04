import { Component } from '@angular/core';
import { Catalogo } from '../../interfaces/catalogo.interface';
import { CatalogoService } from '../../services/catalogo.service';

@Component({
  selector: 'app-list-catalogo',
  standalone: false,
  templateUrl: './list-catalogo.component.html',
})
export class ListCatalogoComponent {
  games: Catalogo[] = [];
  selectedPlatform = 'all';
  isLoading = true;
  hasError = false;

  constructor(private catalogoService: CatalogoService) {}

  ngOnInit(): void {
    this.catalogoService.getAllGames().subscribe({
      next: (games) => {
        this.games = games;
        this.isLoading = false;
      },
      error: () => {
        this.hasError = true;
        this.isLoading = false;
      },
    });
  }

  get filteredGames(): Catalogo[] {
    if (this.selectedPlatform === 'all') {
      return this.games;
    }

    const platform = this.selectedPlatform === 'pc' ? 'PC' : 'Web Browser';
    return this.games.filter((game) => game.platform.includes(platform));
  }
}

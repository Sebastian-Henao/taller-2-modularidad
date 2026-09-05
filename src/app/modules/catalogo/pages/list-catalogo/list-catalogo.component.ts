import { Component } from '@angular/core';
import { Catalogo } from '../../interfaces/catalogo.interface';
import { CatalogoService } from '../../services/catalogo.service';

/**
 * Página principal del catálogo de videojuegos.
 *
 * Coordina la carga de datos desde el servicio y envía los resultados
 * a la tabla del catálogo.
 */
@Component({
  selector: 'app-list-catalogo',
  standalone: false,
  templateUrl: './list-catalogo.component.html',
})
export class ListCatalogoComponent {
  /** Juegos recibidos desde el servicio del catálogo. */
  games: Catalogo[] = [];
  /** Indica si la carga de datos todavía está en curso. */
  isLoading = true;
  /** Indica si ocurrió un error al cargar el catálogo. */
  hasError = false;

  /**
   * Crea la página con el servicio de catálogo.
   * @param catalogoService Servicio que obtiene los videojuegos.
   */
  constructor(private catalogoService: CatalogoService) {}

  /** Carga el catálogo cuando se inicializa la página. */
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
}

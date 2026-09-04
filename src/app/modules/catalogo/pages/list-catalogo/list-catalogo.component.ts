import { Component } from '@angular/core';
import { CATALOGO_CONFIG } from '../../../../core/config/catalogo.config';
import { Catalogo } from '../../interfaces/catalogo.interface';
import { CatalogoService } from '../../services/catalogo.service';

/** Opciones disponibles para filtrar el catálogo por plataforma. */
export type CatalogoPlatformFilter = 'all' | 'pc' | 'browser';

/**
 * Página principal del catálogo de videojuegos.
 *
 * Coordina la carga de datos desde el servicio y aplica el filtro de
 * plataforma antes de enviar los resultados a la tabla.
 */
@Component({
  selector: 'app-list-catalogo',
  standalone: false,
  templateUrl: './list-catalogo.component.html',
})
export class ListCatalogoComponent {
  /** Opciones de plataforma definidas por la configuración del Core. */
  readonly platforms = CATALOGO_CONFIG.platforms;
  /** Juegos recibidos desde la API. */
  games: Catalogo[] = [];
  /** Filtro seleccionado por el usuario: todos, PC o navegador. */
  selectedPlatform: CatalogoPlatformFilter = 'all';
  /** Indica si la consulta HTTP todavía está en curso. */
  isLoading = true;
  /** Indica si ocurrió un error al consultar el catálogo. */
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

  /**
   * Devuelve los juegos que coinciden con la plataforma seleccionada.
   * @returns Lista completa o lista filtrada de videojuegos.
   */
  get filteredGames(): Catalogo[] {
    if (this.selectedPlatform === 'all') {
      return this.games;
    }

    const platform = this.selectedPlatform === 'pc' ? 'PC' : 'Web Browser';
    return this.games.filter((game) => game.platform.includes(platform));
  }
}

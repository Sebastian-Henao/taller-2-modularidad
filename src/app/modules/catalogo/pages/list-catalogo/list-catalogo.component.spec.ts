import { Catalogo } from '../../interfaces/catalogo.interface';
import { CatalogoService } from '../../services/catalogo.service';
import { ListCatalogoComponent } from './list-catalogo.component';

/** Pruebas unitarias de la página y su filtro de plataforma. */
describe('ListCatalogoComponent', () => {
  /** Página bajo prueba. */
  let component: ListCatalogoComponent;

  /** Datos simulados para validar cada opción del filtro. */
  const games: Catalogo[] = [
    {
      id: 1,
      title: 'Juego para PC',
      thumbnail: '',
      short_description: '',
      game_url: '',
      genre: 'Shooter',
      platform: 'PC (Windows)',
      publisher: '',
      developer: '',
      release_date: '',
      freetogame_profile_url: '',
    },
    {
      id: 2,
      title: 'Juego para navegador',
      thumbnail: '',
      short_description: '',
      game_url: '',
      genre: 'MMORPG',
      platform: 'Web Browser',
      publisher: '',
      developer: '',
      release_date: '',
      freetogame_profile_url: '',
    },
  ];

  beforeEach(() => {
    component = new ListCatalogoComponent({} as CatalogoService);
    component.games = games;
  });

  /** Verifica que la respuesta exitosa actualice el listado y el estado. */
  it('debería cargar los juegos correctamente', () => {
    const service = {
      getAllGames: jest.fn().mockReturnValue({
        subscribe: (observer: { next: (games: Catalogo[]) => void }) => observer.next(games),
      }),
    } as unknown as CatalogoService;
    component = new ListCatalogoComponent(service);
    component.ngOnInit();

    expect(component.games).toEqual(games);
    expect(component.isLoading).toBe(false);
    expect(component.hasError).toBe(false);
  });

  /** Verifica que el error de la API active el estado de error. */
  it('debería manejar errores al cargar los juegos', () => {
    const service = {
      getAllGames: jest.fn().mockReturnValue({
        subscribe: (observer: { error: () => void }) => observer.error(),
      }),
    } as unknown as CatalogoService;
    component = new ListCatalogoComponent(service);
    component.ngOnInit();

    expect(component.isLoading).toBe(false);
    expect(component.hasError).toBe(true);
  });

  /** Verifica que el filtro inicial conserve todos los resultados. */
  it('debería mostrar todos los juegos por defecto', () => {
    expect(component.filteredGames).toEqual(games);
  });

  /** Verifica el filtro de juegos compatibles con PC. */
  it('debería filtrar los juegos de PC', () => {
    component.selectedPlatform = 'pc';

    expect(component.filteredGames).toEqual([games[0]]);
  });

  /** Verifica el filtro de juegos compatibles con navegador. */
  it('debería filtrar los juegos de navegador', () => {
    component.selectedPlatform = 'browser';

    expect(component.filteredGames).toEqual([games[1]]);
  });
});

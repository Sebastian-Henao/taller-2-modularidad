import { Catalogo } from '../../interfaces/catalogo.interface';
import { CatalogoService } from '../../services/catalogo.service';
import { ListCatalogoComponent } from './list-catalogo.component';

/** Pruebas unitarias de la página principal del catálogo. */
describe('ListCatalogoComponent', () => {
  /** Página bajo prueba. */
  let component: ListCatalogoComponent;

  /** Datos simulados para validar la carga del catálogo. */
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

});

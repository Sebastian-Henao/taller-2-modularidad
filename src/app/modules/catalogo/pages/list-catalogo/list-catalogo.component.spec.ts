import { Catalogo } from '../../interfaces/catalogo.interface';
import { CatalogoService } from '../../services/catalogo.service';
import { ListCatalogoComponent } from './list-catalogo.component';

describe('ListCatalogoComponent', () => {
  let component: ListCatalogoComponent;

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

  it('debería mostrar todos los juegos por defecto', () => {
    expect(component.filteredGames).toEqual(games);
  });

  it('debería filtrar los juegos de PC', () => {
    component.selectedPlatform = 'pc';

    expect(component.filteredGames).toEqual([games[0]]);
  });

  it('debería filtrar los juegos de navegador', () => {
    component.selectedPlatform = 'browser';

    expect(component.filteredGames).toEqual([games[1]]);
  });
});

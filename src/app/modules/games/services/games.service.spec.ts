import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Game } from '../interfaces/game.interface';
import { GamesService } from './games.service';

describe('GamesService', () => {
  /** Servicio que se está probando. */
  let service: GamesService;
  /** Controlador de peticiones HTTP simuladas. */
  let httpController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });
    service = TestBed.inject(GamesService);
    httpController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpController.verify();
  });

  it('debería crearse correctamente', () => {
    expect(service).toBeTruthy();
  });

  it('debería solicitar todos los juegos a FreeToGame', () => {
    /** Respuesta simulada de la API externa. */
    const games: Game[] = [
      {
        id: 1,
        title: 'Juego de prueba',
        thumbnail: 'https://example.com/game.jpg',
        short_description: 'Descripción',
        game_url: 'https://example.com/game',
        genre: 'MMORPG',
        platform: 'PC (Windows)',
        publisher: 'Publisher',
        developer: 'Developer',
        release_date: '2024-01-01',
        freetogame_profile_url: 'https://example.com/profile',
      },
    ];

    service.getAllGames().subscribe((response) => {
      expect(response).toEqual(games);
    });

    /** Petición HTTP emitida por el servicio. */
    const request = httpController.expectOne('https://www.freetogame.com/api/games');
    expect(request.request.method).toBe('GET');
    request.flush(games);
  });
});
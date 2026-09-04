import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Catalogo } from '../interfaces/catalogo.interface';
import { CatalogoService } from './catalogo.service';

describe('CatalogoService', () => {
  let service: CatalogoService;
  let httpController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });
    service = TestBed.inject(CatalogoService);
    httpController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => httpController.verify());

  it('debería crearse', () => {
    expect(service).toBeTruthy();
  });

  it('debería solicitar todos los juegos', () => {
    const games: Catalogo[] = [];

    service.getAllGames().subscribe((response) => {
      expect(response).toEqual(games);
    });

    const request = httpController.expectOne('https://www.freetogame.com/api/games');
    expect(request.request.method).toBe('GET');
    request.flush(games);
  });
});

import { TestBed } from '@angular/core/testing';
import { CATALOGO_DATA } from '../../../core/config/catalogo.config';
import { Catalogo } from '../interfaces/catalogo.interface';
import { CatalogoService } from './catalogo.service';

/** Pruebas unitarias del servicio de catálogo. */
describe('CatalogoService', () => {
  /** Servicio bajo prueba. */
  let service: CatalogoService;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CatalogoService);
  });

  /** Verifica que el servicio pueda ser inyectado. */
  it('debería crearse', () => {
    expect(service).toBeTruthy();
  });

  /** Verifica que el servicio entregue los datos centrales. */
  it('debería obtener todos los juegos del Core', () => {
    service.getAllGames().subscribe((response) => {
      expect(response).toEqual(CATALOGO_DATA);
    });
  });
});

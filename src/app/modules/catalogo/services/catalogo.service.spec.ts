import { TestBed } from '@angular/core/testing';
import { CatalogoService } from './catalogo.service';

describe('CatalogoService', () => {
  it('debería crearse', () => {
    TestBed.configureTestingModule({});
    expect(TestBed.inject(CatalogoService)).toBeTruthy();
  });
});

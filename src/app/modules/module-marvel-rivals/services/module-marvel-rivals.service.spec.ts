import { TestBed } from '@angular/core/testing';

import { ModuleMarvelRivalsService } from './module-marvel-rivals.service';
import { MARVEL_RIVALS_DATA } from '../../../core/config/marvel-rivals.config';

describe('ModuleMarvelRivalsService', () => {
  let service: ModuleMarvelRivalsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModuleMarvelRivalsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getAllRivals debería retornar un observable con los personajes', (done) => {
    service.getAllRivals().subscribe(rivals => {
      expect(rivals).toEqual(MARVEL_RIVALS_DATA);
      expect(rivals.length).toBe(MARVEL_RIVALS_DATA.length);
      done();
    });
  });
});

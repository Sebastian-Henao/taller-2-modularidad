import { TestBed } from '@angular/core/testing';

import { ModuleMarvelRivalsService } from './module-marvel-rivals.service';

describe('ModuleMarvelRivalsService', () => {
  let service: ModuleMarvelRivalsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModuleMarvelRivalsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

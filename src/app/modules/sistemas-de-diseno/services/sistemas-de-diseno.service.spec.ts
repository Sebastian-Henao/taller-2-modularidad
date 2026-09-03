import { TestBed } from '@angular/core/testing';

import { SistemasDeDisenoService } from './sistemas-de-diseno.service';

describe('SistemasDeDisenoService', () => {
  let service: SistemasDeDisenoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SistemasDeDisenoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

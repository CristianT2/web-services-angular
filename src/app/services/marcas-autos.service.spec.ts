import { TestBed } from '@angular/core/testing';

import { MarcasAutosService } from './marcas-autos.service';

describe('MarcasAutosService', () => {
  let service: MarcasAutosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MarcasAutosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

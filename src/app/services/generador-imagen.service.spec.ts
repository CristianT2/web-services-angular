import { TestBed } from '@angular/core/testing';

import { GeneradorImagenService } from './generador-imagen.service';

describe('GeneradorImagenService', () => {
  let service: GeneradorImagenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeneradorImagenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

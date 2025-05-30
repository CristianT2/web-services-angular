import { TestBed } from '@angular/core/testing';

import { RecuperatorioService } from './recuperatorio.service';

describe('RecuperatorioService', () => {
  let service: RecuperatorioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecuperatorioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

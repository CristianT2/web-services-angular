import { TestBed } from '@angular/core/testing';

import { ConversorPostService } from './conversor-post.service';

describe('ConversorPostService', () => {
  let service: ConversorPostService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConversorPostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

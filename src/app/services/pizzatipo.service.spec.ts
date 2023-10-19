import { TestBed } from '@angular/core/testing';

import { PizzatipoService } from './pizzatipo.service';

describe('PizzatipoService', () => {
  let service: PizzatipoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PizzatipoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

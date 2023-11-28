import { TestBed } from '@angular/core/testing';

import { PizzatipoService } from './pizzatipo.service';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('PizzatipoService', () => {
  let service: PizzatipoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    });
    service = TestBed.inject(PizzatipoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { ProdutodiversoService } from './produtodiverso.service';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ProdutodiversoService', () => {
  let service: ProdutodiversoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    });
    service = TestBed.inject(ProdutodiversoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

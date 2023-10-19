import { TestBed } from '@angular/core/testing';

import { ProdutodiversoService } from './produtodiverso.service';

describe('ProdutodiversoService', () => {
  let service: ProdutodiversoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProdutodiversoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

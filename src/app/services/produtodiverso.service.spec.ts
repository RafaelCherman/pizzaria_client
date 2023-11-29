import { TestBed } from '@angular/core/testing';

import { ProdutodiversoService } from './produtodiverso.service';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {Produtodiverso} from "../models/produtodiverso";

describe('ProdutodiversoService', () => {
  let produtodiversoService: ProdutodiversoService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProdutodiversoService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    });

    produtodiversoService = TestBed.inject(ProdutodiversoService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(produtodiversoService).toBeTruthy();
  });

  it('should get Produtodiverso by id', () => {
    const mockProdutodiverso: Produtodiverso = { id: 1, nome: 'Test Produto', tipo: 'Test Tipo', preco: 10.0 };

    produtodiversoService.findById(1).subscribe((produto: Produtodiverso) => {
      expect(produto).toEqual(mockProdutodiverso);
    });

    const req = httpTestingController.expectOne(`${produtodiversoService.API}?id=1`);
    expect(req.request.method).toEqual('GET');
    req.flush(mockProdutodiverso);
  });

  it('should get all Produtodiversos', () => {
    const mockProdutodiversos: Produtodiverso[] = [
      { id: 1, nome: 'Test Produto 1', tipo: 'Test Tipo 1', preco: 10.0 },
      { id: 2, nome: 'Test Produto 2', tipo: 'Test Tipo 2', preco: 15.0 }
    ];

    produtodiversoService.listAll().subscribe((produtos: Produtodiverso[]) => {
      expect(produtos).toEqual(mockProdutodiversos);
    });

    const req = httpTestingController.expectOne(`${produtodiversoService.API}/all`);
    expect(req.request.method).toEqual('GET');
    req.flush(mockProdutodiversos);
  });
});

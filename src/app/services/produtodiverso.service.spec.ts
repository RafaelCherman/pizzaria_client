import { TestBed } from '@angular/core/testing';

import { ProdutodiversoService } from './produtodiverso.service';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {Produtodiverso} from "../models/produtodiverso";
import {Sabor} from "../models/sabor";
import {Resposta} from "../models/resposta";

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

  it('should save a sabor', () => {
    const produto: Produtodiverso = { id: 1, nome: 'Test Produto 1', tipo: 'Test Tipo 1', preco: 10.0 };

    produtodiversoService.save(produto).subscribe(response => {
      expect(response).toEqual(produto);
    });

    const req = httpTestingController.expectOne('http://localhost:8080/api/produto_diverso');
    expect(req.request.method).toBe('POST');
    req.flush(produto);
  });

  it('should edit a sabor', () => {
    const id = 1;
    const produto: Produtodiverso = { id: 1, nome: 'Test Produto 1', tipo: 'Test Tipo 1', preco: 10.0 };
    produtodiversoService.edit(id,produto ).subscribe(response => {
      expect(response).toEqual(produto);
    });
    const req = httpTestingController.expectOne(`http://localhost:8080/api/produto_diverso?id=${id}`);
    expect(req.request.method).toBe('PUT');
    req.flush(produto);
  });

  it('should delete a sabor', () => {
    const id = 1;
    const resposta: Resposta = new Resposta();
    resposta.mensagem = "Sabor deletado com sucesso!";

    produtodiversoService.delete(id).subscribe(response => {
      expect(response).toEqual(resposta);
    });

    const req = httpTestingController.expectOne(`http://localhost:8080/api/produto_diverso?id=${id}`);
    expect(req.request.method).toBe('DELETE');
    req.flush(resposta);
  });

});

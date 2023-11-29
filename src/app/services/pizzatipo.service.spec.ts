import { TestBed } from '@angular/core/testing';

import { PizzatipoService } from './pizzatipo.service';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {Pizzatipo} from "../models/pizzatipo";
import {Produtodiverso} from "../models/produtodiverso";
import {Resposta} from "../models/resposta";

describe('PizzatipoService', () => {
  let pizzatipoService: PizzatipoService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PizzatipoService]
    });

    pizzatipoService = TestBed.inject(PizzatipoService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(pizzatipoService).toBeTruthy();
  });

  it('should get Pizzatipo by id', () => {
    const mockPizzatipo: Pizzatipo = { id: 1, nome: 'Test Pizza Tipo' ,qntSabores: 1, tamanho: 'grande', valor: 10.0 };

    pizzatipoService.findById(1).subscribe((pizzaTipo: Pizzatipo) => {
      expect(pizzaTipo).toEqual(mockPizzatipo);
    });

    const req = httpTestingController.expectOne(`${pizzatipoService.API}?id=1`);
    expect(req.request.method).toEqual('GET');
    req.flush(mockPizzatipo);
  });

  it('should get all Pizzatipos', () => {
    const mockPizzatipos: Pizzatipo[] = [
      { id: 1, nome: 'Test Pizza Tipo' ,qntSabores: 1, tamanho: 'grande', valor: 10.0 },
      { id: 2, nome: 'Test Pizza Tipo' ,qntSabores: 1, tamanho: 'grande', valor: 10.0 }
    ];

    pizzatipoService.listAll().subscribe((pizzatipos: Pizzatipo[]) => {
      expect(pizzatipos).toEqual(mockPizzatipos);
    });

    const req = httpTestingController.expectOne(`${pizzatipoService.API}/all`);
    expect(req.request.method).toEqual('GET');
    req.flush(mockPizzatipos);
  });

  it('should save a sabor', () => {
    const mockPizzatipo: Pizzatipo = { id: 1, nome: 'Test Pizza Tipo' ,qntSabores: 1, tamanho: 'grande', valor: 10.0 };

    pizzatipoService.save(mockPizzatipo).subscribe(response => {
      expect(response).toEqual(mockPizzatipo);
    });

    const req = httpTestingController.expectOne('http://localhost:8080/api/pizza_tipo');
    expect(req.request.method).toBe('POST');
    req.flush(mockPizzatipo);
  });

  it('should edit a sabor', () => {
    const id = 1;
    const mockPizzatipo: Pizzatipo = { id: 1, nome: 'Test Pizza Tipo' ,qntSabores: 1, tamanho: 'grande', valor: 10.0 };
    pizzatipoService.edit(id,mockPizzatipo ).subscribe(response => {
      expect(response).toEqual(mockPizzatipo);
    });
    const req = httpTestingController.expectOne(`http://localhost:8080/api/pizza_tipo?id=${id}`);
    expect(req.request.method).toBe('PUT');
    req.flush(mockPizzatipo);
  });

  it('should delete a pizza', () => {
    const id = 1;
    const resposta: Resposta = new Resposta();
    resposta.mensagem = "Sabor deletado com sucesso!";

    pizzatipoService.delete(id).subscribe(response => {
      expect(response).toEqual(resposta);
    });

    const req = httpTestingController.expectOne(`http://localhost:8080/api/pizza_tipo?id=${id}`);
    expect(req.request.method).toBe('DELETE');
    req.flush(resposta);
  });

});

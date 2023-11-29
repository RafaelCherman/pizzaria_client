import { TestBed } from '@angular/core/testing';

import { SaborService } from './sabor.service';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {Sabor} from "../models/sabor";
import {Resposta} from "../models/resposta";

describe('SaborService', () => {
  let saborService: SaborService;
  let httpTestingController: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    });
     saborService = TestBed.inject(SaborService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(saborService).toBeTruthy();
  });

  it('should get Sabor by id', () => {
    const mockSabor: Sabor = { id: 1, nome: 'Test Sabor', ingredientes: 'Test Ingredientes', valor: 10.0 };
    saborService.findById(1).subscribe((sabor: Sabor) => {
      expect(sabor).toEqual(mockSabor);
    });
    const req = httpTestingController.expectOne(`${saborService.API}?id=1`);
    expect(req.request.method).toEqual('GET');
    req.flush(mockSabor);
  });

  it('should get all Sabores', () => {
    const mockSabores: Sabor[] = [
      { id: 1, nome: 'Test Sabor 1', ingredientes: 'Test Ingredientes 1', valor: 10.0 },
      { id: 2, nome: 'Test Sabor 2', ingredientes: 'Test Ingredientes 2', valor: 15.0 }
    ];
    saborService.listAll().subscribe((sabores: Sabor[]) => {
      expect(sabores).toEqual(mockSabores);
    });
    const req = httpTestingController.expectOne(`${saborService.API}/all`);
    expect(req.request.method).toEqual('GET');
    req.flush(mockSabores);
  });

  it('should save a sabor', () => {
    const sabor: Sabor = { id: 1, nome: 'Test Sabor 1', ingredientes: 'Test Ingredientes 1', valor: 10.0 };

    saborService.save(sabor).subscribe(response => {
      expect(response).toEqual(sabor);
    });

    const req = httpTestingController.expectOne('http://localhost:8080/api/sabor');
    expect(req.request.method).toBe('POST');
    req.flush(sabor);
  });

  it('should edit a sabor', () => {
    const id = 1;
    const sabor: Sabor = { id: 1, nome: 'Test Sabor 1', ingredientes: 'Test Ingredientes 1', valor: 10.0 };
    saborService.edit(id, sabor).subscribe(response => {
      expect(response).toEqual(sabor);
    });
    const req = httpTestingController.expectOne(`http://localhost:8080/api/sabor?id=${id}`);
    expect(req.request.method).toBe('PUT');
    req.flush(sabor);
  });

  it('should delete a sabor', () => {
    const id = 1;
    const resposta: Resposta = new Resposta();
    resposta.mensagem = "Sabor deletado com sucesso!";

    saborService.delete(id).subscribe(response => {
      expect(response).toEqual(resposta);
    });

    const req = httpTestingController.expectOne(`http://localhost:8080/api/sabor?id=${id}`);
    expect(req.request.method).toBe('DELETE');
    req.flush(resposta);
  });

});

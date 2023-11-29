import { TestBed } from '@angular/core/testing';

import { SaborService } from './sabor.service';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {Sabor} from "../models/sabor";

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
});

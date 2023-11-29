import { TestBed } from '@angular/core/testing';

import { FuncionarioService } from './funcionario.service';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {Funcionario} from "../models/funcionario";
import {Pizza} from "../models/pizza";
import {Resposta} from "../models/resposta";

describe('FuncionarioService', () => {
  let funcionarioService: FuncionarioService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [FuncionarioService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    });

    funcionarioService = TestBed.inject(FuncionarioService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(funcionarioService).toBeTruthy();
  });

  it('should retrieve a funcionario by id', () => {
    const mockFuncionario: Funcionario = {
      id: 1, nome: 'Test Atendente', cpf: '12345678901', funcao: 'Atendente'
    };

    const id = 1;

    funcionarioService.findById(id).subscribe((funcionario: Funcionario) => {
      expect(funcionario).toEqual(mockFuncionario);
    });

    const req = httpTestingController.expectOne(`${funcionarioService.API}?id=${id}`);
    expect(req.request.method).toEqual('GET');
    req.flush(mockFuncionario);
  });

  it('should retrieve all funcionarios', () => {
    const mockFuncionarios: Funcionario[] = [
      {id: 1, nome: 'Test Atendente', cpf: '12345678901', funcao: 'Atendente'}
  ];

    funcionarioService.listAll().subscribe((funcionarios: Funcionario[]) => {
      expect(funcionarios).toEqual(mockFuncionarios);
    });

    const req = httpTestingController.expectOne(`${funcionarioService.API}/all`);
    expect(req.request.method).toEqual('GET');
    req.flush(mockFuncionarios);
  });

  it('should save a sabor', () => {
    const mockPizzatipo: Funcionario =  {id: 1, nome: 'Test Atendente', cpf: '12345678901', funcao: 'Atendente'};

    funcionarioService.save(mockPizzatipo).subscribe(response => {
      expect(response).toEqual(mockPizzatipo);
    });

    const req = httpTestingController.expectOne('http://localhost:8080/api/funcionario');
    expect(req.request.method).toBe('POST');
    req.flush(mockPizzatipo);
  });

  it('should edit a sabor', () => {
    const id = 1;
    const mockPizzatipo: Funcionario =  {id: 1, nome: 'Test Atendente', cpf: '12345678901', funcao: 'Atendente'};
    funcionarioService.edit(id,mockPizzatipo ).subscribe(response => {
      expect(response).toEqual(mockPizzatipo);
    });
    const req = httpTestingController.expectOne(`http://localhost:8080/api/funcionario?id=${id}`);
    expect(req.request.method).toBe('PUT');
    req.flush(mockPizzatipo);
  });



});

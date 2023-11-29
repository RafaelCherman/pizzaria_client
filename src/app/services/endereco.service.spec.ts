import { TestBed } from '@angular/core/testing';

import { EnderecoService } from './endereco.service';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {Endereco} from "../models/endereco";
import {Pizza} from "../models/pizza";
import {Resposta} from "../models/resposta";

describe('EnderecoService', () => {
  let enderecoService: EnderecoService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [EnderecoService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    });

    enderecoService = TestBed.inject(EnderecoService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(enderecoService).toBeTruthy();
  });

  it('should retrieve an endereco by id', () => {
    const mockEndereco: Endereco = {
     id:1,
      telResidencia: '123456',
      rua: 'rua',
      nuEndereco: 123,
      bairro: 'bairro',
      complemento: 'complemento',
      cep: 'cep',
      cliente: { id: 1, nome: 'Test Cliente', cpf: '12345678901', telCelular: '12345678901'}

    };

    const id = 1;

    enderecoService.findById(id).subscribe((endereco: Endereco) => {
      expect(endereco).toEqual(mockEndereco);
    });

    const req = httpTestingController.expectOne(`${enderecoService.API}?id=${id}`);
    expect(req.request.method).toEqual('GET');
    req.flush(mockEndereco);
  });

  it('should retrieve all enderecos', () => {
    const mockEnderecos: Endereco[] = [
      { id:1,
        telResidencia: '123456',
        rua: 'rua',
        nuEndereco: 123,
        bairro: 'bairro',
        complemento: 'complemento',
        cep: 'cep',
        cliente: { id: 1, nome: 'Test Cliente', cpf: '12345678901', telCelular: '12345678901'}
      }
    ];

    enderecoService.listAll().subscribe((enderecos: Endereco[]) => {
      expect(enderecos).toEqual(mockEnderecos);
    });

    const req = httpTestingController.expectOne(`${enderecoService.API}/all`);
    expect(req.request.method).toEqual('GET');
    req.flush(mockEnderecos);
  });

  it('should save a sabor', () => {
    const mockPizzatipo: Endereco = { id:1,
      telResidencia: '123456',
      rua: 'rua',
      nuEndereco: 123,
      bairro: 'bairro',
      complemento: 'complemento',
      cep: 'cep',
      cliente: { id: 1, nome: 'Test Cliente', cpf: '12345678901', telCelular: '12345678901'}
    };

    enderecoService.save(mockPizzatipo).subscribe(response => {
      expect(response).toEqual(mockPizzatipo);
    });

    const req = httpTestingController.expectOne('http://localhost:8080/api/endereco');
    expect(req.request.method).toBe('POST');
    req.flush(mockPizzatipo);
  });

  it('should edit a sabor', () => {
    const id = 1;
    const mockPizzatipo: Endereco = { id:1,
      telResidencia: '123456',
      rua: 'rua',
      nuEndereco: 123,
      bairro: 'bairro',
      complemento: 'complemento',
      cep: 'cep',
      cliente: { id: 1, nome: 'Test Cliente', cpf: '12345678901', telCelular: '12345678901'}
    };
    enderecoService.edit(id,mockPizzatipo ).subscribe(response => {
      expect(response).toEqual(mockPizzatipo);
    });
    const req = httpTestingController.expectOne(`http://localhost:8080/api/endereco?id=${id}`);
    expect(req.request.method).toBe('PUT');
    req.flush(mockPizzatipo);
  });

  it('should delete a pizza', () => {
    const id = 1;
    const resposta: Resposta = new Resposta();
    resposta.mensagem = "Sabor deletado com sucesso!";

    enderecoService.delete(id).subscribe(response => {
      expect(response).toEqual(resposta);
    });

    const req = httpTestingController.expectOne(`http://localhost:8080/api/endereco?id=${id}`);
    expect(req.request.method).toBe('DELETE');
    req.flush(resposta);
  });
});

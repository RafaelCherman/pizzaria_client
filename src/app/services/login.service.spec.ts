import {TestBed} from '@angular/core/testing';

import {LoginService} from './login.service';
import {CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA} from '@angular/core';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {Dadoscliente} from "../models/dadoscliente";
import {Usuario} from "../models/usuario";

describe('LoginService', () => {
  let loginService: LoginService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [LoginService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    });

    loginService = TestBed.inject(LoginService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(loginService).toBeTruthy();
  });

  it('should log in a user', () => {
    const mockUser = {
      login: 'test',
      senha: 'test'
    };

    const mockLogin: Usuario = {
      login: 'test', senha: 'test'
    };

    loginService.logar(mockLogin).subscribe((user: any) => {
      expect(user).toEqual(mockUser);
    });

    const req = httpTestingController.expectOne(loginService.API);
    expect(req.request.method).toEqual('POST');
    req.flush(mockUser);
  });

  it('should register a user', () => {
    const mockUser = {
      login: 'test', senha: 'test'
    };

    const mockDadosCliente: Dadoscliente = {
      login: {
        login: 'test',
        senha: 'test'
      },
       cliente: {
        id: 1,
        nome: 'test',
        cpf: 'test',
        telCelular: 'test'
      }
    };

    loginService.cadastrar(mockDadosCliente).subscribe((user: any) => {
      expect(user).toEqual(mockUser);
    });

    const req = httpTestingController.expectOne(`${loginService.API}/create`);
    expect(req.request.method).toEqual('POST');
    req.flush(mockUser);
  });

});

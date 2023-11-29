import { TestBed } from '@angular/core/testing';

import { PedidoService } from './pedido.service';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {Pedido} from "../models/pedido";

describe('PedidoService', () => {
  let pedidoService: PedidoService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PedidoService]
    });

    pedidoService = TestBed.inject(PedidoService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(pedidoService).toBeTruthy();
  });

  it('should get Pedido by id', () => {
    const mockPedido: Pedido = {
      id: 1,
      cliente: { id: 1, nome: 'Test Cliente', cpf: '12345678901', telCelular: '12345678901' },
      atendente: { id: 1, nome: 'Test Atendente', cpf: '12345678901', funcao: 'Atendente' },
      entregador: { id: 1, nome: 'Test Atendente', cpf: '12345678901', funcao: 'Atendente' },
      solicitaEntrega: true,
      situacaoPedido: 'solicitado',
      valorTotal: 10.0,
      endereco: {id:1, telResidencia: '123456', rua: 'rua', nuEndereco: 123, bairro: 'bairro', complemento: 'complemento', cep: 'cep',
        cliente: { id: 1, nome: 'Test Cliente', cpf: '12345678901', telCelular: '12345678901'}},
      formaPagamento: 'dinheiro',
      dataPedido: '2021-06-01',
      pizzas: [{ id: 1,
        tipo: { id: 1, nome: 'Test Pizza Tipo' ,qntSabores: 1, tamanho: 'grande', valor: 10.0 },
        sabor: [{ id: 1, nome: 'Test Sabor 1', valor: 5, ingredientes:'ingradientes'}],
        valorPizza: 15
      } ],
      produtos: [{ id: 1, nome: 'Test Produto', tipo: 'Test Tipo', preco: 10.0 }],
    };

    pedidoService.findById(1).subscribe((pedido: Pedido) => {
      expect(pedido).toEqual(mockPedido);
    });

    const req = httpTestingController.expectOne(`${pedidoService.API}?id=1`);
    expect(req.request.method).toEqual('GET');
    req.flush(mockPedido);
  });

  it('should get all Pedidos', () => {
    const mockPedidos: Pedido[] = [
      {
        id: 1,
        cliente: { id: 1, nome: 'Test Cliente', cpf: '12345678901', telCelular: '12345678901' },
        atendente: { id: 1, nome: 'Test Atendente', cpf: '12345678901', funcao: 'Atendente' },
        entregador: { id: 1, nome: 'Test Atendente', cpf: '12345678901', funcao: 'Atendente' },
        solicitaEntrega: true,
        situacaoPedido: 'solicitado',
        valorTotal: 10.0,
        endereco: {id:1, telResidencia: '123456', rua: 'rua', nuEndereco: 123, bairro: 'bairro', complemento: 'complemento', cep: 'cep',
          cliente: { id: 1, nome: 'Test Cliente', cpf: '12345678901', telCelular: '12345678901'}},
        formaPagamento: 'dinheiro',
        dataPedido: '2021-06-01',
        pizzas: [{ id: 1,
          tipo: { id: 1, nome: 'Test Pizza Tipo' ,qntSabores: 1, tamanho: 'grande', valor: 10.0 },
          sabor: [{ id: 1, nome: 'Test Sabor 1', valor: 5, ingredientes:'ingradientes'}],
          valorPizza: 15
        } ],
        produtos: [{ id: 1, nome: 'Test Produto', tipo: 'Test Tipo', preco: 10.0 }],
      },
      {
        id: 2,
        cliente: { id: 1, nome: 'Test Cliente', cpf: '12345678901', telCelular: '12345678901' },
        atendente: { id: 1, nome: 'Test Atendente', cpf: '12345678901', funcao: 'Atendente' },
        entregador: { id: 1, nome: 'Test Atendente', cpf: '12345678901', funcao: 'Atendente' },
        solicitaEntrega: true,
        situacaoPedido: 'solicitado',
        valorTotal: 10.0,
        endereco: {id:1, telResidencia: '123456', rua: 'rua', nuEndereco: 123, bairro: 'bairro', complemento: 'complemento', cep: 'cep',
          cliente: { id: 1, nome: 'Test Cliente', cpf: '12345678901', telCelular: '12345678901'}},
        formaPagamento: 'dinheiro',
        dataPedido: '2021-06-01',
        pizzas: [{ id: 1,
          tipo: { id: 1, nome: 'Test Pizza Tipo' ,qntSabores: 1, tamanho: 'grande', valor: 10.0 },
          sabor: [{ id: 1, nome: 'Test Sabor 1', valor: 5, ingredientes:'ingradientes'}],
          valorPizza: 15
        } ],
        produtos: [{ id: 1, nome: 'Test Produto', tipo: 'Test Tipo', preco: 10.0 }],
      }
    ];

    pedidoService.listAll().subscribe((pedidos: Pedido[]) => {
      expect(pedidos).toEqual(mockPedidos);
    });

    const req = httpTestingController.expectOne(`${pedidoService.API}/all`);
    expect(req.request.method).toEqual('GET');
    req.flush(mockPedidos);
  });

  it('should get Pedidos by situacao', () => {
    const mockPedidos: Pedido[] = [
      {
        id: 1,
        cliente: { id: 1, nome: 'Test Cliente', cpf: '12345678901', telCelular: '12345678901' },
        atendente: { id: 1, nome: 'Test Atendente', cpf: '12345678901', funcao: 'Atendente' },
        entregador: { id: 1, nome: 'Test Atendente', cpf: '12345678901', funcao: 'Atendente' },
        solicitaEntrega: true,
        situacaoPedido: 'solicitado',
        valorTotal: 10.0,
        endereco: {id:1, telResidencia: '123456', rua: 'rua', nuEndereco: 123, bairro: 'bairro', complemento: 'complemento', cep: 'cep',
          cliente: { id: 1, nome: 'Test Cliente', cpf: '12345678901', telCelular: '12345678901'}},
        formaPagamento: 'dinheiro',
        dataPedido: '2021-06-01',
        pizzas: [{ id: 1,
          tipo: { id: 1, nome: 'Test Pizza Tipo' ,qntSabores: 1, tamanho: 'grande', valor: 10.0 },
          sabor: [{ id: 1, nome: 'Test Sabor 1', valor: 5, ingredientes:'ingradientes'}],
          valorPizza: 15
        } ],
        produtos: [{ id: 1, nome: 'Test Produto', tipo: 'Test Tipo', preco: 10.0 }],
      },
      {
        id: 2,
        cliente: { id: 1, nome: 'Test Cliente', cpf: '12345678901', telCelular: '12345678901' },
        atendente: { id: 1, nome: 'Test Atendente', cpf: '12345678901', funcao: 'Atendente' },
        entregador: { id: 1, nome: 'Test Atendente', cpf: '12345678901', funcao: 'Atendente' },
        solicitaEntrega: true,
        situacaoPedido: 'solicitado',
        valorTotal: 10.0,
        endereco: {id:1, telResidencia: '123456', rua: 'rua', nuEndereco: 123, bairro: 'bairro', complemento: 'complemento', cep: 'cep',
          cliente: { id: 1, nome: 'Test Cliente', cpf: '12345678901', telCelular: '12345678901'}},
        formaPagamento: 'dinheiro',
        dataPedido: '2021-06-01',
        pizzas: [{ id: 1,
          tipo: { id: 1, nome: 'Test Pizza Tipo' ,qntSabores: 1, tamanho: 'grande', valor: 10.0 },
          sabor: [{ id: 1, nome: 'Test Sabor 1', valor: 5, ingredientes:'ingradientes'}],
          valorPizza: 15
        } ],
        produtos: [{ id: 1, nome: 'Test Produto', tipo: 'Test Tipo', preco: 10.0 }],
      }
    ];

    const situacao = 'some_situacao';

    pedidoService.listBySituacao(situacao).subscribe((pedidos: Pedido[]) => {
      expect(pedidos).toEqual(mockPedidos);
    });

    const req = httpTestingController.expectOne(`${pedidoService.API}/situacao?s=${situacao}`);
    expect(req.request.method).toEqual('GET');
    req.flush(mockPedidos);
  });
});

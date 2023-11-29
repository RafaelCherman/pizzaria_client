import { Pedido } from './pedido';
import { Cliente } from './cliente';
import { Funcionario } from './funcionario';
import { Endereco } from './endereco';
import { Pizza } from './pizza';
import { Produtodiverso } from './produtodiverso';

describe('Pedido', () => {
  it('should create an instance of Pedido', () => {
    const cliente = new Cliente();
    const atendente = new Funcionario();
    const endereco = new Endereco();
    const entregador = new Funcionario();
    const pizzas: Pizza[] = [];
    const produtos: Produtodiverso[] = [];

    const pedido = new Pedido(
      1,
      cliente,
      atendente,
      endereco,
      entregador,
      true,
      'Em andamento',
      50.0,
      'Cartão de Crédito',
      '2023-11-29',
      pizzas,
      produtos
    );

    expect(pedido).toBeTruthy();
  });

  it('should have properties id, cliente, atendente, endereco, entregador, solicitaEntrega, situacaoPedido, valorTotal, formaPagamento, dataPedido, pizzas, and produtos', () => {
    const cliente = new Cliente();
    const atendente = new Funcionario();
    const endereco = new Endereco();
    const entregador = new Funcionario();
    const pizzas: Pizza[] = [];
    const produtos: Produtodiverso[] = [];

    const pedido = new Pedido(
      1,
      cliente,
      atendente,
      endereco,
      entregador,
      true,
      'Em andamento',
      50.0,
      'Cartão de Crédito',
      '2023-11-29',
      pizzas,
      produtos
    );

    expect(pedido.id).toBeDefined();
    expect(pedido.cliente).toBeDefined();
    expect(pedido.atendente).toBeDefined();
    expect(pedido.endereco).toBeDefined();
    expect(pedido.entregador).toBeDefined();
    expect(pedido.solicitaEntrega).toBeDefined();
    expect(pedido.situacaoPedido).toBeDefined();
    expect(pedido.valorTotal).toBeDefined();
    expect(pedido.formaPagamento).toBeDefined();
    expect(pedido.dataPedido).toBeDefined();
    expect(pedido.pizzas).toBeDefined();
    expect(pedido.produtos).toBeDefined();
  });
});

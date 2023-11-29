/*import { Cliente } from "./cliente";
import { Endereco } from "./endereco";
import { Funcionario } from "./funcionario";
import { Pizza } from "./pizza";
import { Produtodiverso } from "./produtodiverso";

export class Pedido {

    id!: number;
    cliente!: Cliente;
    atendente!: Funcionario;
    endereco!: Endereco;
    entregador!: Funcionario;
    solicitaEntrega!: boolean;
    situacaoPedido!: string;
    valorTotal!: number;
    formaPagamento!: string;
    dataPedido!: string;
    pizzas!: Pizza[];
    produtos!: Produtodiverso[];
}
*/
// pedido.ts
import { Cliente } from './cliente';
import { Endereco } from './endereco';
import { Funcionario } from './funcionario';
import { Pizza } from './pizza';
import { Produtodiverso } from './produtodiverso';

export class Pedido {
    id!: number;
    cliente!: Cliente;
    atendente!: Funcionario;
    endereco!: Endereco;
    entregador!: Funcionario;
    solicitaEntrega!: boolean;
    situacaoPedido!: string;
    valorTotal!: number;
    formaPagamento!: string;
    dataPedido!: string;
    pizzas!: Pizza[];
    produtos!: Produtodiverso[];

    constructor(
        id: number = 0,
        cliente: Cliente = new Cliente(),
        atendente: Funcionario = new Funcionario(),
        endereco: Endereco = new Endereco(),
        entregador: Funcionario = new Funcionario(),
        solicitaEntrega: boolean = false,
        situacaoPedido: string = '',
        valorTotal: number = 0,
        formaPagamento: string = '',
        dataPedido: string = '',
        pizzas: Pizza[] = [],
        produtos: Produtodiverso[] = []
    ) {
        this.id = id;
        this.cliente = cliente;
        this.atendente = atendente;
        this.endereco = endereco;
        this.entregador = entregador;
        this.solicitaEntrega = solicitaEntrega;
        this.situacaoPedido = situacaoPedido;
        this.valorTotal = valorTotal;
        this.formaPagamento = formaPagamento;
        this.dataPedido = dataPedido;
        this.pizzas = pizzas;
        this.produtos = produtos;
    }
}

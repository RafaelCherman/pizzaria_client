import { Cliente } from "./cliente";
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
    data!: string;
    pizzas!: Pizza[];
    produtos!: Produtodiverso[];
}

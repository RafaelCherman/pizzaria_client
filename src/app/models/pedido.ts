import { Pizza } from "./pizza";
import { Produtodiverso } from "./produtodiverso";

export class Pedido {

    id!: number;
    //cliente
    //atendente
    //endereco
    //entregador
    solicitaEntrega!: boolean;
    situacaoPedido!: string;
    valorTotal!: number;
    formaPagamento!: string;
    //data
    pizzas!: Pizza[];
    produtos!: Produtodiverso[];
}

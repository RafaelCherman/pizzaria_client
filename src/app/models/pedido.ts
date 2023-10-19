import { Pizza } from "./pizza";
import { Produtodiverso } from "./produtodiverso";

export class Pedido {

    solicitaEntrega!: boolean;
    situacaoPedido!: string;
    valorTotal!: number;
    formaPagamento!: string;
    pizzas!: Pizza[];
    produtos!: Produtodiverso[];
}

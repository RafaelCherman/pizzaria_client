import { Component, EventEmitter, Output } from '@angular/core';
import { Produtodiverso } from 'src/app/models/produtodiverso';

@Component({
  selector: 'app-pedidoselecionarproduto',
  templateUrl: './pedidoselecionarproduto.component.html',
  styleUrls: ['./pedidoselecionarproduto.component.scss']
})
export class PedidoselecionarprodutoComponent {

  @Output() retorno = new EventEmitter<Produtodiverso>();
  produto: Produtodiverso = new Produtodiverso();
  valorProdutos: number = 0;

  constructor()
  {
    this.produto.nomeProduto = "Coca-Cola";
    this.produto.tipo = "Refrigerante 2l";
    this.produto.quantidade = 2;
    this.produto.preco = 8;
  }

  adicionar()
  {
    this.retorno.emit(this.produto);
  }


}

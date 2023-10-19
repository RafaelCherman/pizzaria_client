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
    this.produto.preco = 50;
  }

  adicionar()
  {
    this.retorno.emit(this.produto);
  }


}

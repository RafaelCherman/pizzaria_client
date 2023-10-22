import { Component, EventEmitter, Output, inject } from '@angular/core';
import { Produtodiverso } from 'src/app/models/produtodiverso';
import { ProdutodiversoService } from 'src/app/services/produtodiverso.service';

@Component({
  selector: 'app-pedidoselecionarproduto',
  templateUrl: './pedidoselecionarproduto.component.html',
  styleUrls: ['./pedidoselecionarproduto.component.scss']
})
export class PedidoselecionarprodutoComponent {

  produtoService = inject(ProdutodiversoService);

  @Output() retorno = new EventEmitter<Produtodiverso>();
  
  produtosSelecionados: Produtodiverso[] = [];

  valorProdutos: number = 0;

  produtos: Produtodiverso[] = [];

  constructor()
  {
    this.listAllProdutos();
  }

  listAllProdutos()
  {
    this.produtoService.listAll().subscribe({
      next: lista =>{
        this.produtos = lista;
      },
      error: erro =>{
        alert('Exemplo de tratamento de erro/exception! Observe o erro no console!');
        console.error(erro);
      }
    })
  }

  adicionar()
  {

  }


}

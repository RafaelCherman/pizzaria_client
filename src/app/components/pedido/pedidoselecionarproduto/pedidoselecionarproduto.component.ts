import { Component, EventEmitter, Output, inject } from '@angular/core';
import { Produtodiverso } from 'src/app/models/produtodiverso';
import { ProdutodiversoService } from 'src/app/services/produtodiverso.service';
import { Qntproduto } from './qntproduto';

@Component({
  selector: 'app-pedidoselecionarproduto',
  templateUrl: './pedidoselecionarproduto.component.html',
  styleUrls: ['./pedidoselecionarproduto.component.scss']
})
export class PedidoselecionarprodutoComponent {

  produtoService = inject(ProdutodiversoService);

  @Output() retorno = new EventEmitter<Produtodiverso[]>();
  
  produtosSelecionados: Produtodiverso[] = [];

  valorProdutos: number = 0;

  produtosQnt: Qntproduto[] = [];

  constructor()
  {
    this.listAllProdutos();
  }
  

  listAllProdutos()
  {
    this.produtoService.listAll().subscribe({
      next: lista =>{
        for(let i of lista)
        {
          this.produtosQnt.push({produto: i, quantidade: 0});
        }
      },
      error: erro =>{
        alert('Exemplo de tratamento de erro/exception! Observe o erro no console!');
        console.error(erro);
      }
    })
  }

  adicionar()
  {
    if(this.produtosSelecionados.length > 0)
    {
      this.retorno.emit(this.produtosSelecionados);
    }
  }

  adicionarProduto(obj: Qntproduto)
  {
    this.produtosSelecionados.push(obj.produto);
    obj.quantidade += 1;
    this.valorProdutos += obj.produto.preco;
  }

  removerProduto(obj: Qntproduto)
  {
    if(obj.quantidade > 0)
    {
      obj.quantidade -= 1;
      this.valorProdutos -= obj.produto.preco;
      for(let i=0; i < this.produtosSelecionados.length; i++)
      {
        if(obj.produto.id == this.produtosSelecionados[i].id)
        {
          this.produtosSelecionados.splice(i, 1);
          break;
        }
      }
    }
  }
  
  cancelar()
  {
    this.retorno.emit();
  }



}

import { Component, inject } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Pedido } from 'src/app/models/pedido';
import { Pizza } from 'src/app/models/pizza';
import { Produtodiverso } from 'src/app/models/produtodiverso';

@Component({
  selector: 'app-pedidocriar',
  templateUrl: './pedidocriar.component.html',
  styleUrls: ['./pedidocriar.component.scss']
})
export class PedidocriarComponent {

  produtoList: Produtodiverso[] = [];
  pizzaList: Pizza[] = [];
  pedido: Pedido = new Pedido();

  valorTotal: number = 0;

  modalService = inject(NgbModal);
  modalRef!: NgbModalRef;

  

  constructor(){}

  abrirModalPizza(modal: any){
    this.modalRef = this.modalService.open(modal, { size: 'lg' });
  }

  abrirModalProduto(modal: any){
    this.modalRef = this.modalService.open(modal, { size: 'lg' });
  }

  addPizza(pizza: Pizza)
  {
    this.pizzaList.push(pizza);
    this.valorTotal += pizza.valorPizza;
    this.modalRef.dismiss();
  }

  removePizza(pizza: Pizza)
  {
    this.valorTotal -= pizza.valorPizza;
    for(let i=0; i < this.pizzaList.length; i++)
    {
        if(pizza.id == this.pizzaList[i].id)
        {
          this.pizzaList.splice(i, 1);
          break;
        }
    }
  }

  addProduto(produtos: Produtodiverso[])
  {
    for(let i of produtos)
    {
      this.produtoList.push(i);
      this.valorTotal += i.preco;
    }
    this.modalRef.dismiss();
  }

  removeProduto(produto: Produtodiverso)
  {
    this.valorTotal -= produto.preco;
    for(let i=0; i < this.produtoList.length; i++)
    {
        if(produto.id == this.produtoList[i].id)
        {
          this.produtoList.splice(i, 1);
          break;
        }
    }
  }

  finalizaPedido()
  {
    
    if(this.pedido.pizzas.length > 0 || this.pedido.produtos.length > 0)
    {
      this.pedido.pizzas = this.pizzaList;
      this.pedido.produtos = this.produtoList;
      console.log(this.pizzaList);
      console.log(this.produtoList);
      console.log(this.pedido);  
    }
  }
}

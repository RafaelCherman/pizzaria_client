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

  addProduto(produto: Produtodiverso)
  {
    this.produtoList.push(produto);
    this.valorTotal += produto.preco;
    this.modalRef.dismiss();
  }

  finalizaPedido()
  {
    this.pedido.pizzas = this.pizzaList;
    this.pedido.produtos = this.produtoList;
    console.log(this.pizzaList);
    console.log(this.produtoList);
    console.log(this.pedido);
  }
}

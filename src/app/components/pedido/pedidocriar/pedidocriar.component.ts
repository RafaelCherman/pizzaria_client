import { Component, EventEmitter, Output, inject } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Pedido } from 'src/app/models/pedido';
import { Pizza } from 'src/app/models/pizza';
import { Produtodiverso } from 'src/app/models/produtodiverso';
import { PizzaService } from 'src/app/services/pizza.service';

@Component({
  selector: 'app-pedidocriar',
  templateUrl: './pedidocriar.component.html',
  styleUrls: ['./pedidocriar.component.scss']
})
export class PedidocriarComponent {

  pizzaService = inject(PizzaService);
  produtoList: Produtodiverso[] = [];
  pizzaList: Pizza[] = [];
  pedido: Pedido = new Pedido();

  valorTotal: number = 0;

  @Output() retorno = new EventEmitter<any>();
  modalService = inject(NgbModal);
  modalRef!: NgbModalRef;

  

  constructor(){}

  abrirModal(modal: any){
    this.modalRef = this.modalService.open(modal, { size: 'lg' });
  }

  addPizza(pizza: Pizza)
  {
    if(pizza)
    {
      this.pizzaList.push(pizza);
      this.valorTotal += pizza.valorPizza;
    }
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
    if(produtos)
    {
      for(let i of produtos)
      {
        this.produtoList.push(i);
        this.valorTotal += i.preco;
      }
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

  finalizaPedido(modal: any)
  {
    
    if(this.pizzaList.length > 0 || this.produtoList.length > 0)
    {
      this.pedido.pizzas = this.pizzaList;
      this.pedido.produtos = this.produtoList;
      this.pedido.valorTotal = this.valorTotal;
      this.abrirModal(modal);
      console.log(this.pizzaList);
      console.log(this.produtoList);
      console.log(this.pedido);  
    }
  }

  voltar(pedido: Pedido)
  {
    if(pedido)
    {
      this.modalService.dismissAll();
    }
    else
    {
      this.modalRef.dismiss();
    }
  }

  cancelar()
  {
    if(this.pizzaList.length > 0)
    {
      for(let i of this.pizzaList)
      {
        this.pizzaService.delete(i.id).subscribe({
          next: resposta =>{
            console.log(resposta.mensagem);
          },
          error: erro =>{
            alert("Erro. Consulte o console");
            console.log(erro);
          }
        })
      }
    }
    this.retorno.emit();
  }


}

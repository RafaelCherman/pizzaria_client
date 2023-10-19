import { Component, EventEmitter, Output } from '@angular/core';
import { Pizza } from 'src/app/models/pizza';

@Component({
  selector: 'app-pedidoselecionarpizza',
  templateUrl: './pedidoselecionarpizza.component.html',
  styleUrls: ['./pedidoselecionarpizza.component.scss']
})
export class PedidoselecionarpizzaComponent {

  @Output() retorno = new EventEmitter<Pizza>();
  pizza: Pizza = new Pizza();
  valorPizza: number = 0;

  constructor()
  {
    this.pizza.valorPizza = 50;
  }

  adicionar()
  {
    this.retorno.emit(this.pizza);
  }

}

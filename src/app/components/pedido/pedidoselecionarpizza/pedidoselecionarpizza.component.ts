import { Component, EventEmitter, Output, inject } from '@angular/core';
import { Pizza } from 'src/app/models/pizza';
import { Pizzatipo } from 'src/app/models/pizzatipo';
import { Sabor } from 'src/app/models/sabor';
import { PizzaService } from 'src/app/services/pizza.service';
import { PizzatipoService } from 'src/app/services/pizzatipo.service';
import { SaborService } from 'src/app/services/sabor.service';

@Component({
  selector: 'app-pedidoselecionarpizza',
  templateUrl: './pedidoselecionarpizza.component.html',
  styleUrls: ['./pedidoselecionarpizza.component.scss']
})
export class PedidoselecionarpizzaComponent {

  @Output() retorno = new EventEmitter<Pizza>();
  pizza: Pizza = new Pizza();
  valorPizza: number = 0;


  pizzaService = inject(PizzaService);



  //PARA TESTES
  sabores: Sabor[] = [];
  pizzaTipo: Pizzatipo = new Pizzatipo();
  saborService = inject(SaborService);
  pizzaTipoService = inject(PizzatipoService);
  //ALTERAR RETORNOS DO BACKEND

  constructor()
  {
    this.listAllSabores();
    this.findTipoById();
  }

  listAllSabores(){
    this.saborService.listAll().subscribe({
      next: lista =>{
        this.sabores = lista;
      },
      error: erro =>{
        alert('Exemplo de tratamento de erro/exception! Observe o erro no console!');
        console.error(erro);
      }
    })
  }
  
  findTipoById()
  {
    this.pizzaTipoService.findById(1).subscribe({
      next: tipo =>{
        this.pizzaTipo = tipo;
      },
      error: erro =>{
        alert('Exemplo de tratamento de erro/exception! Observe o erro no console!');
        console.error(erro);
      }
    })
  }

  adicionar()
  {
    this.pizza.tipo = this.pizzaTipo;
    this.pizza.sabor = this.sabores;

    this.pizzaService.save(this.pizza).subscribe({
      next: sucesso =>{
        this.retorno.emit(this.pizza);
        
      },
      error: erro =>{
        alert('Exemplo de tratamento de erro/exception! Observe o erro no console!');
        console.error(erro);
        console.log(this.pizza);
      }
    })
  }

}

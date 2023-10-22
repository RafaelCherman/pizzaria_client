import { Component, EventEmitter, Output, inject } from '@angular/core';
import { Pizza } from 'src/app/models/pizza';
import { Pizzatipo } from 'src/app/models/pizzatipo';
import { Sabor } from 'src/app/models/sabor';
import { PizzaService } from 'src/app/services/pizza.service';
import { PizzatipoService } from 'src/app/services/pizzatipo.service';
import { SaborService } from 'src/app/services/sabor.service';
import { Checklist } from './checklist';

@Component({
  selector: 'app-pedidoselecionarpizza',
  templateUrl: './pedidoselecionarpizza.component.html',
  styleUrls: ['./pedidoselecionarpizza.component.scss']
})
export class PedidoselecionarpizzaComponent {

  pizzaService = inject(PizzaService);

  @Output() retorno = new EventEmitter<Pizza>();
  pizza: Pizza = new Pizza();
  tipo: Pizzatipo = new Pizzatipo();
  saboresSelecionados: Sabor[] = [];
  
  
  
  valorPizza: number = 0;
  checkList: Checklist[] = [];



  



  //PARA TESTES
  sabores: Sabor[] = [];
  tipos: Pizzatipo[] = [];
  saborService = inject(SaborService);
  pizzaTipoService = inject(PizzatipoService);
  total: number = 0;
  quantidade: number = 0;
  //ALTERAR RETORNOS DO BACKEND

  constructor()
  {
    this.listAllSabores();
    this.listAllTipos();
  }

  listAllSabores(){
    this.saborService.listAll().subscribe({
      next: lista =>{
        for(let i of lista)
        {
          this.checkList.push({sabor: i, selected: false});
        }
      },
      error: erro =>{
        alert('Exemplo de tratamento de erro/exception! Observe o erro no console!');
        console.error(erro);
      }
    })
  }
  
  listAllTipos()
  {
    this.pizzaTipoService.listAll().subscribe({
      next: lista =>{
        this.tipos = lista;
      },
      error: erro =>{
        alert('Exemplo de tratamento de erro/exception! Observe o erro no console!');
        console.error(erro);
      }
    })
  }

  adicionar()
  {
    this.pizza.sabor = this.saboresSelecionados;
    this.pizza.tipo = this.tipo;

    this.pizzaService.save(this.pizza).subscribe({
      next: sucesso =>{
        this.retorno.emit(sucesso);
        
      },
      error: erro =>{
        alert('Exemplo de tratamento de erro/exception! Observe o erro no console!');
        console.error(erro);
        console.log(this.pizza);
      }
    })
  }

  selecionarTamanho(tipo: Pizzatipo){
    for(let i of this.checkList)
    {
      i.selected = false;
    }
    this.saboresSelecionados = [];
    this.quantidade = 0;
    this.total = tipo.qntSabores;
    this.valorPizza = tipo.valor;
    this.tipo = tipo;
    console.log(this.saboresSelecionados);
  }

  selecionarSabor(event: any, obj: Checklist)
  {
    if(event.target.checked)
    {
      obj.selected = true;
      this.quantidade += 1;
      this.valorPizza += obj.sabor.valor;
      this.saboresSelecionados.push(obj.sabor);
    }
    else if (!event.target.checked) {

      let index: number;
      obj.selected = false;
      this.quantidade -= 1;
      this.valorPizza -= obj.sabor.valor;

      for(let i=0; i < this.saboresSelecionados.length; i++)
      {
        if(obj.sabor.id == this.saboresSelecionados[i].id)
        {
          index = i;
          this.saboresSelecionados.splice(index, 1);
          break;
        }
      }


    }
    
    console.log(this.saboresSelecionados);
  }

}

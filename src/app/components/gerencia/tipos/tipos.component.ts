import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Pizzatipo } from 'src/app/models/pizzatipo';
import { PizzatipoService } from 'src/app/services/pizzatipo.service';

@Component({
  selector: 'app-tipos',
  templateUrl: './tipos.component.html',
  styleUrls: ['./tipos.component.scss']
})
export class TiposComponent {

  tipoService = inject(PizzatipoService);
  tipos: Pizzatipo[]=[];

  router = inject(Router);

  constructor(){
    this.listAll();
  }

  listAll()
  {
    this.tipoService.listAll().subscribe({
      next: lista =>{
        this.tipos = lista;
      },
      error: erro=>{
        console.log(erro);
      }
    })
  }

  cadastrar(){
    this.router.navigate(['tipos/novo']);
  }

}

import { Component, Input, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Pizzatipo } from 'src/app/models/pizzatipo';

@Component({
  selector: 'app-exibetipo',
  templateUrl: './exibetipo.component.html',
  styleUrls: ['./exibetipo.component.scss']
})
export class ExibetipoComponent {
  @Input() tipos: Pizzatipo[]=[];
  @Input() gerencia: boolean = true;

  router = inject(Router);



  constructor(){
  }

  gerenciar(id: number)
  {
    this.router.navigate(['tipos/editar/'+ id]);
  }
}

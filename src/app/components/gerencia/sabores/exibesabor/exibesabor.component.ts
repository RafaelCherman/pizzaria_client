import { Component, Input, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Sabor } from 'src/app/models/sabor';

@Component({
  selector: 'app-exibesabor',
  templateUrl: './exibesabor.component.html',
  styleUrls: ['./exibesabor.component.scss']
})
export class ExibesaborComponent {

  @Input() sabores: Sabor[]=[];
  @Input() gerencia: boolean = true;

  router = inject(Router);



  constructor(){
  }

  gerenciar(id: number)
  {
    this.router.navigate(['sabores/editar/'+ id]);
  }

}

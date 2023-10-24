import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Sabor } from 'src/app/models/sabor';
import { SaborService } from 'src/app/services/sabor.service';

@Component({
  selector: 'app-sabores',
  templateUrl: './sabores.component.html',
  styleUrls: ['./sabores.component.scss']
})
export class SaboresComponent {

  saborService = inject(SaborService);
  sabores: Sabor[]=[];

  router = inject(Router);

  constructor(){
    this.listAll();
  }

  listAll()
  {
    this.saborService.listAll().subscribe({
      next: lista =>{
        this.sabores = lista;
      },
      error: erro=>{
        console.log(erro);
      }
    })
  }

  cadastrar(){
    this.router.navigate(['sabor/novo']);
  }

}

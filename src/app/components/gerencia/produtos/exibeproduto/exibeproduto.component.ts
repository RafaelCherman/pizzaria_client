import { Component, Input, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Produtodiverso } from 'src/app/models/produtodiverso';

@Component({
  selector: 'app-exibeproduto',
  templateUrl: './exibeproduto.component.html',
  styleUrls: ['./exibeproduto.component.scss']
})
export class ExibeprodutoComponent {

  @Input() produtos: Produtodiverso[]=[];
  @Input() gerencia: boolean = true;

  router = inject(Router);



  constructor(){
  }

  gerenciar(id: number)
  {
    this.router.navigate(['produtos/editar/'+ id]);
  }


}

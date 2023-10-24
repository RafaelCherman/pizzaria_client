import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Produtodiverso } from 'src/app/models/produtodiverso';
import { ProdutodiversoService } from 'src/app/services/produtodiverso.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss']
})
export class ProdutosComponent {

  produtoService = inject(ProdutodiversoService);
  produtos: Produtodiverso[]=[];

  router = inject(Router);

  constructor(){
    this.listAll();
  }

  listAll()
  {
    this.produtoService.listAll().subscribe({
      next: lista =>{
        this.produtos = lista;
      },
      error: erro=>{
        console.log(erro);
      }
    })
  }

  cadastrar(){
    this.router.navigate(['produtos/novo']);
  }

}

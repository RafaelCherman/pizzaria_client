import { Component, Input, inject } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Produtodiverso } from 'src/app/models/produtodiverso';
import { ProdutodiversoService } from 'src/app/services/produtodiverso.service';

@Component({
  selector: 'app-exibeproduto',
  templateUrl: './exibeproduto.component.html',
  styleUrls: ['./exibeproduto.component.scss']
})
export class ExibeprodutoComponent {
/*
  @Input() produtos: Produtodiverso[]=[];
  @Input() gerencia: boolean = true;

  router = inject(Router);



  constructor(){
  }

  gerenciar(id: number)
  {
    this.router.navigate(['produtos/editar/'+ id]);
  }*/
  @Input() produtos: Produtodiverso[]=[];
  @Input() gerencia: boolean = true;

  lista: Produtodiverso[] = [];
  objeto: Produtodiverso = new Produtodiverso();
  modalService = inject(NgbModal);
  opcaoBotao: string = "Cadastrar";
  router = inject(Router);
  service = inject(ProdutodiversoService);

  constructor() {
    this.listar();
  }

  listar() {
    this.service.listAtivo().subscribe({
      next: lista => {
        
        this.lista = lista;
      },
      error: erro => {
        this.lista = [];
        console.error(erro);
      }
    });

  }

  editar(content: any, objeto: Produtodiverso) {
    this.objeto = Object.assign({}, objeto);
    this.opcaoBotao = "Editar";
    this.modalService.open(content, {size: 'xl'})
  }

  excluir(content: any, objeto: Produtodiverso) {
    this.opcaoBotao= "Excluir";
    this.objeto = Object.assign({}, objeto);
    this.modalService.open(content,{size: 'xl'});
  }


  cadastrar(content: any) {
    this.opcaoBotao = "Cadastrar";
    this.objeto = new Produtodiverso();
    this.modalService.open(content, {size: 'xl'})
  }



}

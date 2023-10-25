import { Component, Input, inject } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Sabor } from 'src/app/models/sabor';
import { SaborService } from 'src/app/services/sabor.service';

@Component({
  selector: 'app-exibesabor',
  templateUrl: './exibesabor.component.html',
  styleUrls: ['./exibesabor.component.scss']
})
export class ExibesaborComponent {

  @Input() sabores: Sabor[]=[];
  @Input() gerencia: boolean = true;


  lista: Sabor[] = [];
  objeto: Sabor = new Sabor();
  modalService = inject(NgbModal);
  opcaoBotao: string = "Cadastrar";
  router = inject(Router);
  service = inject(SaborService);


/*
  constructor(){
  }

  gerenciar(id: number)
  {
    this.router.navigate(['sabores/editar/'+ id]);
  }*/


  constructor() {
    this.listar();
  }

  listar() {
    this.service.listAll().subscribe({
      next: lista => {
        
        this.lista = lista;
      },
      error: erro => {
        this.lista = [];
        console.error(erro);
      }
    });

  }

  editar(content: any, objeto: Sabor) {
    this.objeto = Object.assign({}, objeto);
    this.opcaoBotao = "Editar";
    this.modalService.open(content, {size: 'xl'})
  }

  excluir(content: any, objeto: Sabor) {
    this.opcaoBotao= "Excluir";
    this.objeto = Object.assign({}, objeto);
    this.modalService.open(content,{size: 'xl'});
  }


  cadastrar(content: any) {
    this.opcaoBotao = "Cadastrar";
    this.objeto = new Sabor();
    this.modalService.open(content, {size: 'xl'})
  }


}

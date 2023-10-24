import {Component, inject, Input} from '@angular/core';
import {Pizzatipo} from "../../../../models/pizzatipo";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {Router} from "@angular/router";
import {PizzatipoService} from "../../../../services/pizzatipo.service";

@Component({
  selector: 'app-tipopizzalist',
  templateUrl: './tipopizzalist.component.html',
  styleUrls: ['./tipopizzalist.component.scss']
})
export class TipopizzalistComponent {
  lista: Pizzatipo[] = [];
  objeto: Pizzatipo = new Pizzatipo();
  modalService = inject(NgbModal);
  opcaoBotao: string = "Cadastrar";
  router = inject(Router);
  service = inject(PizzatipoService);
  @Input() tipos: Pizzatipo[] = [];
  @Input() gerencia: boolean = true;

  constructor() {
    this.listar();
  }

  listar() {
    this.service.listAll().subscribe({
      next: lista => {
        for (const listaKey in lista) {

        }
        this.lista = lista;
      },
      error: erro => {
        alert('Exemplo de tratamento de erro/exception! Observe o erro no console!');
        console.error(erro);
      }
    });

  }

  editar(content: any, tipo: Pizzatipo) {


    this.objeto = Object.assign({}, tipo);
    this.opcaoBotao = "Editar";


    this.modalService.open(content, {size: 'xl'})
  }

  excluir(content: any, objeto: Pizzatipo) {
    this.opcaoBotao= "Excluir";
    this.objeto = Object.assign({}, objeto);
    this.modalService.open(content,{size: 'xl'});


  }


  cadastrar(content: any) {
    this.opcaoBotao = "Cadastrar";
    this.modalService.open(content, {size: 'xl'})
  }
}



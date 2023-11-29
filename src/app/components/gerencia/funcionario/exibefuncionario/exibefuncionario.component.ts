import {Component, EventEmitter, inject, Input, Output} from '@angular/core';
import {Funcionario} from "../../../../models/funcionario";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {FuncionarioService} from "../../../../services/funcionario.service";

@Component({
  selector: 'app-exibefuncionario',
  templateUrl: './exibefuncionario.component.html',
  styleUrls: ['./exibefuncionario.component.scss']
})
export class ExibefuncionarioComponent {
  lista: Funcionario[] = [];
  objeto: Funcionario = new Funcionario();
  modalService = inject(NgbModal);
  opcaoBotao: string = "Cadastrar";
  service = inject(FuncionarioService);
  @Input() funcionarios: Funcionario[] = [];
  @Input() gerencia: boolean = true;


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

  editar(content: any, funcionario: Funcionario) {
    this.objeto = Object.assign({}, funcionario);
    this.opcaoBotao = "Editar";
    this.modalService.open(content, {size: 'xl'})
  }

  excluir(content: any, objeto: Funcionario) {
    this.opcaoBotao = "Excluir";
    this.objeto = Object.assign({}, objeto);
    this.modalService.open(content, {size: 'xl'});
    this.listar();
  }

  cadastrar(content: any) {
    this.objeto= new Funcionario();

    this.opcaoBotao = "Cadastrar";
    this.modalService.open(content, {size: 'xl'})
    this.listar();
  }

}

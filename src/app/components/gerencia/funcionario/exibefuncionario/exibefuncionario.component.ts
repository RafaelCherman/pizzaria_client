import {Component, inject, Input} from '@angular/core';
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

  cosntructor() {
    this.listar();
  }

  listar() {
    this.service.listAll().subscribe({
      next: lista => {
        this.lista = lista;
      },
      error: erro => {
        alert('Exemplo de tratamento de erro/exception! Observe o erro no console!');
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
  }

  cadastrar(content: any) {
    this.opcaoBotao = "Cadastrar";
    this.modalService.open(content, {size: 'xl'})
  }

}

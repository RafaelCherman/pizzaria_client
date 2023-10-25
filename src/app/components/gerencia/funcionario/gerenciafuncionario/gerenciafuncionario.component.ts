import {Component, inject, Input, OnInit} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ExibefuncionarioComponent} from "../exibefuncionario/exibefuncionario.component";
import {Funcionario} from "../../../../models/funcionario";
import {FuncionarioService} from "../../../../services/funcionario.service";

@Component({
  selector: 'app-gerenciafuncionario',
  templateUrl: './gerenciafuncionario.component.html',
  styleUrls: ['./gerenciafuncionario.component.scss']
})
export class GerenciafuncionarioComponent implements OnInit{

  modelService=inject(NgbModal);
  mensagem!: string;
  erro: boolean = false;
  sucesso: boolean = false;
  lista = inject(ExibefuncionarioComponent);
  @Input() objetoEnviado: Funcionario = new Funcionario();
  @Input() opcaoBotao: string = "";
  service= inject(FuncionarioService);
  tipo: Funcionario = new Funcionario();

  constructor() {
  }
  ngOnInit(): void {
    this.tipo = this.objetoEnviado;
  }

  cadastrar() {
    this.service.save(this.tipo).subscribe({
      next: tipo => {
        this.mensagem = "Registro cadastrado com Sucesso";
        this.erro = false;
        this.sucesso = true;
        this.modelService.dismissAll();
        this.lista.listar()
      },
      error: erro => {
        console.log(erro);
        this.mensagem = "Houve algum erro";
        this.erro = true;
        this.sucesso = false;

      }
    });
  }

  editar() {
    this.service.edit(this.tipo.id, this.tipo).subscribe({
      next: tipo => {
        this.mensagem = "Registro atualizado com Sucesso";
        this.erro = false;
        this.sucesso = true;
        this.modelService.dismissAll();
        this.lista.listar()
      },
      error: erro => {
        console.log(erro);
        this.mensagem = "Houve algum erro";
        this.erro = true;
        this.sucesso = false;

      }
    });
  }

  excluir() {
    this.service.delete(this.tipo.id).subscribe({
      next: tipo => {
        this.mensagem = "Registro excluído com Sucesso";
        this.erro = false;
        this.sucesso = true;
        this.modelService.dismissAll();
        this.lista.listar()
      },
      error: erro => {
        console.log(erro);
        this.mensagem = "Houve algum erro";
        this.erro = true;
        this.sucesso = false;

      }
    });
  }
  voltar() {

    this.modelService.dismissAll();

  }
}

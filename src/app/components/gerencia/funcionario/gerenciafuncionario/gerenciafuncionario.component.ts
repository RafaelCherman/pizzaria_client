import {Component, EventEmitter, inject, Input, OnInit, Output} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
//import {ExibefuncionarioComponent} from "../exibefuncionario/exibefuncionario.component";
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
  lista: Funcionario[] = [];
  @Input() objetoEnviado: Funcionario = new Funcionario();
  @Input() opcaoBotao: string = "";
  @Output() retorno = new EventEmitter<any>();

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
        this.retorno.emit();
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
        this.retorno.emit();
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
        this.retorno.emit();
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
}

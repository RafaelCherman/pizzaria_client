import {Component, inject, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Pizzatipo} from 'src/app/models/pizzatipo';
import {PizzatipoService} from 'src/app/services/pizzatipo.service';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-gerenciatipo',
  templateUrl: './gerenciatipo.component.html',
  styleUrls: ['./gerenciatipo.component.scss']
})
export class GerenciatipoComponent implements OnInit {

  router = inject(Router);
  modalService = inject(NgbModal);
  mensagem!: string;
  erro: boolean = false;
  sucesso: boolean = false;
  lista: Pizzatipo[] = [];
  @Input() objetoEnviado: Pizzatipo = new Pizzatipo();
  @Input() opcaoBotao: string = "";
  tipoService = inject(PizzatipoService);
  tipo: Pizzatipo = new Pizzatipo();

  constructor() {  }

  ngOnInit(): void {
    this.tipo = this.objetoEnviado;
 }

  findById(id: any) {

    this.tipoService.findById(id).subscribe({
      next: tipo => {
        this.tipo = tipo;
      },
      error: erro => {
        console.log(erro);
      }
    })
  }

  cadastrar() {
    this.tipoService.save(this.tipo).subscribe({
      next: tipo => {
        this.mensagem = "Registro cadastrado com Sucesso";
        this.erro = false;
        this.sucesso = true;
        this.modalService.dismissAll();
        this.listar()
      },
      error: erro => {
        console.log(erro);
        this.mensagem = "Houve algum erro";
        this.erro = true;
        this.sucesso = false;

      }
    })
  }

  editar() {
    this.tipoService.edit( this.tipo.id, this.tipo).subscribe({
      next: tipo => {
        this.mensagem = "Registro editado com Sucesso";
        this.erro = false;
        this.sucesso = true;
        this.listar();
        this.modalService.dismissAll();
      },
      error: erro => {
        console.log(erro);
        this.mensagem = "Houve algum erro";
        this.erro = true;

        this.sucesso = false;
      }
    })
  }

  voltar() {

    this.modalService.dismissAll();

  }

  excluir() {
    this.tipoService.delete(this.tipo.id).subscribe({
      next: tipo => {
        this.mensagem = "Registro excluído com Sucesso";
        this.erro = false;
        this.sucesso = true;
        this.listar();
        this.modalService.dismissAll();
      },
      error: erro => {
        console.log(erro);
        this.mensagem = "Houve algum erro";
        this.erro = true;
        this.sucesso = false;
      }
    })

  }

  listar() {
    this.tipoService.listAll().subscribe({
      next: lista => {

        this.lista = lista;
      },
      error: erro => {
        alert('Exemplo de tratamento de erro/exception! Observe o erro no console!');
        console.error(erro);
      }
    });

  }
}

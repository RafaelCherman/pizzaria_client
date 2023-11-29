import {Component, Input, inject, Output, EventEmitter} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Produtodiverso} from 'src/app/models/produtodiverso';
import {ProdutodiversoService} from 'src/app/services/produtodiverso.service';
import {ExibeprodutoComponent} from '../exibeproduto/exibeproduto.component';

@Component({
  selector: 'app-gerenciaproduto',
  templateUrl: './gerenciaproduto.component.html',
  styleUrls: ['./gerenciaproduto.component.scss']
})
export class GerenciaprodutoComponent {

  router = inject(Router);
  modalService = inject(NgbModal);
  mensagem!: string;
  erro: boolean = false;
  sucesso: boolean = false;
  lista: Produtodiverso[] = [];
  @Input() objetoEnviado: Produtodiverso = new Produtodiverso();
  @Input() opcaoBotao: string = "";
  @Output() retorno = new EventEmitter<any>();

  service = inject(ProdutodiversoService);
  produto: Produtodiverso = new Produtodiverso();

  constructor() {
  }

  ngOnInit(): void {
    this.produto = this.objetoEnviado;
  }

  cadastrar() {
    this.service.save(this.produto).subscribe({
      next: produto => {
        this.mensagem = "Registro cadastrado com Sucesso";
        this.erro = false;
        this.sucesso = true;
        this.modalService.dismissAll();
        this.retorno.emit();
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
    this.service.edit(this.produto.id, this.produto).subscribe({
      next: produto => {
        this.mensagem = "Registro editado com Sucesso";
        this.erro = false;
        this.sucesso = true;
        this.modalService.dismissAll();
        this.retorno.emit();
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
    this.service.delete(this.produto.id).subscribe({
      next: produto => {
        this.mensagem = "Registro excluído com Sucesso";
        this.erro = false;
        this.sucesso = true;
        this.retorno.emit();
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

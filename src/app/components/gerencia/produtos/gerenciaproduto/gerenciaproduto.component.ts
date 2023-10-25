import { Component, Input, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Produtodiverso } from 'src/app/models/produtodiverso';
import { ProdutodiversoService } from 'src/app/services/produtodiverso.service';
import { ExibeprodutoComponent } from '../exibeproduto/exibeproduto.component';

@Component({
  selector: 'app-gerenciaproduto',
  templateUrl: './gerenciaproduto.component.html',
  styleUrls: ['./gerenciaproduto.component.scss']
})
export class GerenciaprodutoComponent {
/*
  roteador = inject(ActivatedRoute);
  router = inject(Router);

  mensagem!: string;
  erro: boolean = false;
  sucesso: boolean = false;

  produtoService = inject(ProdutodiversoService);
  produto: Produtodiverso = new Produtodiverso();

  id: any;
  edicao: boolean = false

  constructor(){
    this.id = this.roteador.snapshot.paramMap.get('id');
    if(this.id != null)
    {
      this.findById(this.id);
      this.edicao = true;
    }
    else
    {
      this.edicao = false;
    }
  }

  findById(id: any){
    this.produtoService.findById(id).subscribe({
      next: produto =>{
        this.produto = produto;
      },
      error: erro =>
      {
        console.log(erro);
      }
    })
  }

  cadastrar(){
    this.produtoService.save(this.produto).subscribe({
      next: produto  =>
      {
        this.mensagem = "Registro cadastrado com Sucesso";
        this.erro = false;
        this.sucesso = true;
      },
      error: erro =>
      {
        console.log(erro);
        this.mensagem = "Houve algum erro";
        this.erro = true;
        this.sucesso = false;
      }
    })
  }

  editar(){
    this.produtoService.edit(this.id, this.produto).subscribe({
      next: produto  =>
      {
        this.mensagem = "Registro editado com Sucesso";
        this.erro = false;
        this.sucesso = true;
      },
      error: erro =>
      {
        console.log(erro);
        this.mensagem = "Houve algum erro";
        this.erro = true;
        this.sucesso = false;
      }
    })
  }

  voltar()
  {
    this.router.navigate(['/produtos'])
  }*/

  router = inject(Router);
  modalService = inject(NgbModal);
  mensagem!: string;
  erro: boolean = false;
  sucesso: boolean = false;
  lista = inject(ExibeprodutoComponent)
  @Input() objetoEnviado: Produtodiverso = new Produtodiverso();
  @Input() opcaoBotao: string = "";
  service = inject(ProdutodiversoService);
  produto: Produtodiverso = new Produtodiverso();

  constructor() {  }

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
        this.lista.listar()
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
    this.service.edit( this.produto.id, this.produto).subscribe({
      next: produto => {
        this.mensagem = "Registro editado com Sucesso";
        this.erro = false;
        this.sucesso = true;
        this.lista.listar();
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
    this.service.delete(this.produto.id).subscribe({
      next: produto => {
        this.mensagem = "Registro excluído com Sucesso";
        this.erro = false;
        this.sucesso = true;
        this.lista.listar();
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



}

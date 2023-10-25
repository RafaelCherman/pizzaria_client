import { Component, Input, inject } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Sabor } from 'src/app/models/sabor';
import { SaborService } from 'src/app/services/sabor.service';
import { ExibesaborComponent } from '../exibesabor/exibesabor.component';

@Component({
  selector: 'app-gerenciasabor',
  templateUrl: './gerenciasabor.component.html',
  styleUrls: ['./gerenciasabor.component.scss']
})
export class GerenciasaborComponent {

  router = inject(Router);
  modalService = inject(NgbModal);
  mensagem!: string;
  erro: boolean = false;
  sucesso: boolean = false;
  lista = inject(ExibesaborComponent)
  @Input() objetoEnviado: Sabor = new Sabor();
  @Input() opcaoBotao: string = "";
  service = inject(SaborService);
  sabor: Sabor = new Sabor();

/*
  roteador = inject(ActivatedRoute);
  router = inject(Router);

  mensagem!: string;
  erro: boolean = false;
  sucesso: boolean = false;

  saborService = inject(SaborService);
  sabor: Sabor = new Sabor();

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
    this.saborService.findById(id).subscribe({
      next: sabor =>{
        this.sabor = sabor;
      },
      error: erro =>
      {
        console.log(erro);
      }
    })
  }

  cadastrar(){
    this.saborService.save(this.sabor).subscribe({
      next: sabor  =>
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
    this.saborService.edit(this.id, this.sabor).subscribe({
      next: sabor  =>
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
    this.router.navigate(['/sabores'])
  }
*/

  

  constructor() {  }

  ngOnInit(): void {
    this.sabor = this.objetoEnviado;
    this.sabor = this.objetoEnviado;
 }

  cadastrar() {
    this.service.save(this.sabor).subscribe({
      next: sabor => {
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
    this.service.edit( this.sabor.id, this.sabor).subscribe({
      next: sabor => {
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
    this.service.delete(this.sabor.id).subscribe({
      next: sabor => {
    this.service.delete(this.sabor.id).subscribe({
      next: sabor => {
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
  }) 
  }


}

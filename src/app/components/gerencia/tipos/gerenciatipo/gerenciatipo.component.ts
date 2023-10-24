import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pizzatipo } from 'src/app/models/pizzatipo';
import { PizzatipoService } from 'src/app/services/pizzatipo.service';

@Component({
  selector: 'app-gerenciatipo',
  templateUrl: './gerenciatipo.component.html',
  styleUrls: ['./gerenciatipo.component.scss']
})
export class GerenciatipoComponent {

  roteador = inject(ActivatedRoute);
  router = inject(Router);

  mensagem!: string;
  erro: boolean = false;
  sucesso: boolean = false;

  tipoService = inject(PizzatipoService);
  tipo: Pizzatipo = new Pizzatipo();

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
    this.tipoService.findById(id).subscribe({
      next: tipo =>{
        this.tipo = tipo;
      },
      error: erro =>
      {
        console.log(erro);
      }
    })
  }

  cadastrar(){
    this.tipoService.save(this.tipo).subscribe({
      next: tipo  =>
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
    this.tipoService.edit(this.id, this.tipo).subscribe({
      next: tipo  =>
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
    this.router.navigate(['/tipos'])
  }
}

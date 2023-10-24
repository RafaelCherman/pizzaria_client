import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Sabor } from 'src/app/models/sabor';
import { SaborService } from 'src/app/services/sabor.service';

@Component({
  selector: 'app-gerenciasabor',
  templateUrl: './gerenciasabor.component.html',
  styleUrls: ['./gerenciasabor.component.scss']
})
export class GerenciasaborComponent {

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

}

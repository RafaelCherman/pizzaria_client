import { Component, EventEmitter, Output, inject } from '@angular/core';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-clientecriar',
  templateUrl: './clientecriar.component.html',
  styleUrls: ['./clientecriar.component.scss']
})
export class ClientecriarComponent {

  clienteService = inject(ClienteService);
  cliente: Cliente = new Cliente();


  @Output() retorno = new EventEmitter<any>();
  
  
  selecionado: boolean = true;
  opcao: boolean = true;
  erro: boolean = false;
  mensagem: string = "";
  cpf: string = "";

  constructor() {}

  finalizar()
  {
    if(!(this.selecionado))
    {
      this.clienteService.save(this.cliente).subscribe({
        next: cliente =>{
          this.retorno.emit(cliente);
        },
        error: erro =>
        {
          console.log(erro);
        }
      })
    }
    else
    {
      this.retorno.emit(this.cliente);
    }
  }


  escolher(escolha: boolean)
  {
    this.selecionado = escolha;
    this.opcao = escolha;
    if(!escolha)
    {
      this.cliente = new Cliente();
    }
  }

  buscar()
  {
    this.clienteService.findByCpf(this.cpf).subscribe({
      next: cliente =>{
        this.erro = false;
        this.cliente = cliente;
        this.selecionado = true;
        this.opcao = false;
      },
      error: erro =>{
        this.erro = true;
        this.mensagem = "CPF não encontrado";
      } 
    })
  }

  voltar()
  {
    this.retorno.emit();
  }

}

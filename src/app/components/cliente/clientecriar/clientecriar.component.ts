import { Component, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';
import { Cliente } from 'src/app/models/cliente';
import { Dadoscliente } from 'src/app/models/dadoscliente';
import { Usuario } from 'src/app/models/usuario';
import { ClienteService } from 'src/app/services/cliente.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-clientecriar',
  templateUrl: './clientecriar.component.html',
  styleUrls: ['./clientecriar.component.scss']
})
export class ClientecriarComponent implements OnInit{

  clienteService = inject(ClienteService);
  loginService = inject(LoginService)
  cliente: Cliente = new Cliente();
  login: Usuario = new Usuario();



  @Output() retorno = new EventEmitter<any>();
  @Input() user: boolean = false;
  
  
  selecionado: boolean = true;
  opcao: boolean = true;
  erro: boolean = false;
  mensagem: string = "";
  cpf: string = "";

  constructor() {}
  
  ngOnInit(): void {
    this.selecionado = !this.user;
  }

  finalizar()
  {
    if(!(this.selecionado))
    {
      this.clienteService.save(this.cliente).subscribe({
        next: cliente =>{
          let dados: Dadoscliente = new Dadoscliente();
          this.login.login = cliente.cpf;

          dados.cliente = cliente;
          dados.login = this.login;

          this.loginService.cadastrar(dados).subscribe({
            next: usuario =>{
              if(this.user)
              {
                this.retorno.emit(usuario.username);
              }
              else
              {
                this.retorno.emit(cliente);
              }
            }
          });
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

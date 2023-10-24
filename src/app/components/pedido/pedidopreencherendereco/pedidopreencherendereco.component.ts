import { Component, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';
import { end } from '@popperjs/core';
import { Cliente } from 'src/app/models/cliente';
import { Endereco } from 'src/app/models/endereco';
import { Pedido } from 'src/app/models/pedido';
import { ClienteService } from 'src/app/services/cliente.service';
import { EnderecoService } from 'src/app/services/endereco.service';
import { PedidoService } from 'src/app/services/pedido.service';

@Component({
  selector: 'app-pedidopreencherendereco',
  templateUrl: './pedidopreencherendereco.component.html',
  styleUrls: ['./pedidopreencherendereco.component.scss']
})
export class PedidopreencherenderecoComponent implements OnInit{

  
  pedidoService = inject(PedidoService);
  enderecoService = inject(EnderecoService);

  @Output() retorno = new EventEmitter<any>();
  @Input() pedido: Pedido = new Pedido();
  
  enderecos: Endereco[] = [];
  endereco: Endereco = new Endereco();

  selecionado: boolean = true;
  opcao: boolean = true;

  constructor() {}

  ngOnInit(): void {
    this.listAllByCliente(this.pedido.cliente.id);
  }

  listAllByCliente(id: number)
  {
    this.enderecoService.listByCliente(id).subscribe({
      next: lista =>{
        this.enderecos = lista;
      },
      error: error =>{
        console.log(error);
      }
      
    })
  }

  finalizar()
  {

    if(this.selecionado)
    {
      this.pedido.endereco = this.endereco;
      this.pedidoService.save(this.pedido).subscribe({
        next: pedido =>{
          this.retorno.emit(pedido);
        },
        error: erro =>{
          alert('Exemplo de tratamento de erro/exception! Observe o erro no console!');
          console.error(erro);
        }
      });
    }
    else if(!this.selecionado){
      this.endereco.cliente = this.pedido.cliente;
      this.enderecoService.save(this.endereco).subscribe({
        next: endereco =>{
          this.pedido.endereco = endereco;
          
          this.pedidoService.save(this.pedido).subscribe({
            next: pedido =>{
              this.retorno.emit(pedido);
            },
            error: erro =>{
              alert('Exemplo de tratamento de erro/exception! Observe o erro no console!');
              console.error(erro);
            }
          });
        },
        error: erro =>{
          alert('Exemplo de tratamento de erro/exception! Observe o erro no console!');
          console.error(erro);
        }
      })
    }
  }

  escolher(escolha: boolean)
  {
    this.selecionado = escolha;
    this.opcao = escolha;
    if(!escolha)
    {
      this.endereco = new Endereco();
    }
  }

  selecionar(endereco: Endereco)
  {
    this.endereco = endereco;
    this.opcao = false;
  }

  voltar()
  {
    this.retorno.emit();
  }
}

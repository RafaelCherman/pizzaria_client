import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
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
export class PedidopreencherenderecoComponent {

  clienteService = inject(ClienteService);
  pedidoService = inject(PedidoService);
  enderecoService = inject(EnderecoService);

  @Output() retorno = new EventEmitter<any>();
  @Input() pedido: Pedido = new Pedido();

  cliente: Cliente = new Cliente();
  enderecos: Endereco[] = [];
  endereco: Endereco = new Endereco();

  selecionado: boolean = false;
  opcao: boolean = false;

  constructor()
  {
    this.findClientById();
  }

  findClientById()
  {
    this.clienteService.findById(1).subscribe({
      next: cliente =>{
        this.cliente = cliente;
        this.enderecoService.listByCliente(cliente.id).subscribe({
          next: lista =>{
            this.enderecos = lista;
          },
          error: erro =>{
            alert('Exemplo de tratamento de erro/exception! Observe o erro no console!');
            console.error(erro);
          }
        })
      },
      error: erro =>{
        alert('Exemplo de tratamento de erro/exception! Observe o erro no console!');
        console.error(erro);
      }
    })
  }

  finalizar()
  {
    this.pedido.situacaoPedido = "A confirmar";

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
      this.endereco.cliente = this.cliente;
      this.enderecoService.save(this.endereco).subscribe({
        next: endereco =>{
          this.pedido.endereco = endereco;
          
          this.pedido.solicitaEntrega = true;
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

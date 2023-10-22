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
  endereco: Endereco = new Endereco();

  constructor()
  {
    this.findClientById();
  }

  findClientById()
  {
    this.clienteService.findById(1).subscribe({
      next: cliente =>{
        this.endereco.cliente = cliente;
      },
      error: erro =>{
        alert('Exemplo de tratamento de erro/exception! Observe o erro no console!');
        console.error(erro);
      }
    })
  }

  finalizar()
  {
    this.enderecoService.save(this.endereco).subscribe({
      next: endereco =>{
        this.pedido.endereco = endereco;
        this.pedido.situacaoPedido = "A confirmar";
        this.pedido.solicitaEntrega = true;
        this.pedidoService.save(this.pedido).subscribe({
          next: pedido =>{
            this.retorno.emit(pedido);
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
}

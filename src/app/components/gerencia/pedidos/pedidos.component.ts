import { Component, inject } from '@angular/core';
import { Pedido } from 'src/app/models/pedido';
import { PedidoService } from 'src/app/services/pedido.service';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.scss']
})
export class PedidosComponent {

  pedidoService = inject(PedidoService);

  

  selecionado: string = "confirmar";

  constructor(){
    
  }

  selecionar(selecionado: string)
  {
    this.selecionado = selecionado;
  }

  
}

import { Component, ViewChild, inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Cliente } from 'src/app/models/cliente';
import { Pedido } from 'src/app/models/pedido';
import { PedidoService } from 'src/app/services/pedido.service';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.scss']
})
export class PedidosComponent {

  pedidoService = inject(PedidoService);
  modalService = inject(NgbModal);
  cliente: Cliente = new Cliente();
  @ViewChild('modal2') modal: any;

  

  selecionado: string = "confirmar";

  constructor(){
    
  }

  selecionar(selecionado: string)
  {
    this.selecionado = selecionado;
  }

  abrir(modal: any)
  { 
    this.modalService.open(modal, { size: 'lg' });
  }

  fechar(retorno: any)
  {
    if(retorno)
    {
      this.cliente = retorno;
      this.abrir(this.modal);
    }
    else{
      this.modalService.dismissAll();
    }
  }
  
}

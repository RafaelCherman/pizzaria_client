import { Component, inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-menupedido',
  templateUrl: './menupedido.component.html',
  styleUrls: ['./menupedido.component.scss']
})
export class MenupedidoComponent {

  modalService = inject(NgbModal);
  clienteService = inject(ClienteService);
  cliente: Cliente = new Cliente();


  constructor(){
    this.findClientById(1);
  }

  findClientById(id: number)
  {
    this.clienteService.findById(id).subscribe({
      next: cliente =>{
        this.cliente = cliente;
      },
      error: erro =>{
        console.error(erro);
      }
    })
  }

  abrir(modal: any)
  { 
    this.modalService.open(modal, { size: 'lg' });
  }

  fechar(retorno: any)
  {
    if(retorno)
    {
      
    }
    this.modalService.dismissAll();
  }

}


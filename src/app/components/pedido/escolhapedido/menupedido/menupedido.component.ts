import { Component, inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/services/cliente.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-menupedido',
  templateUrl: './menupedido.component.html',
  styleUrls: ['./menupedido.component.scss']
})
export class MenupedidoComponent {

  modalService = inject(NgbModal);
  clienteService = inject(ClienteService);
  cliente: Cliente = new Cliente();
  loginService = inject(LoginService);


  constructor(){
    let id: number = this.loginService.getClientID(this.loginService.getToken());
    if(id > 0)
    {
      this.findClientById(id);
    }
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


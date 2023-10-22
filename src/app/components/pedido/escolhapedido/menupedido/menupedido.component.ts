import { Component, inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-menupedido',
  templateUrl: './menupedido.component.html',
  styleUrls: ['./menupedido.component.scss']
})
export class MenupedidoComponent {

  modalService = inject(NgbModal);

  abrir(modal: any)
  { 
    this.modalService.open(modal, { size: 'lg' });
  }

}


import { Component, inject } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-pedidocriar',
  templateUrl: './pedidocriar.component.html',
  styleUrls: ['./pedidocriar.component.scss']
})
export class PedidocriarComponent {
  valorTotal: number = 0;

  modalService = inject(NgbModal);
  modalRef!: NgbModalRef;

  constructor(){}

  abrirModalPizza(modal: any){
    this.modalRef = this.modalService.open(modal, { size: 'md' });
  }

  abrirModalProduto(modal: any){
    this.modalRef = this.modalService.open(modal, { size: 'md' });
  }
}

import { Component, inject } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent {

  modalService = inject(NgbModal);

  abrir(modal: any)
  { 
    this.modalService.open(modal, { size: 'md' });
  }

}

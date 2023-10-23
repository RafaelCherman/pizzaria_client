import {Component, inject, ViewChild} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
modalService = inject(NgbModal);
@ViewChild('sideMenu') sidemenu: any;

openModal(sidemenu: any) {
  this.modalService.open(sidemenu )
}

  openMenu() {

  this.sidemenu.toggle();
}


}

import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss']
})
export class SidemenuComponent {

  classname: string = "disabled"
  roteador = inject(Router);


  toggle(){
    if(this.classname === "disabled"){
      this.classname = "total"
    }else{
      this.classname = "disabled"
    }
  }

  fechamenu(){
    this.classname = "disabled"
  }

  login(){
    this.roteador.navigate(['login']);
  }

}

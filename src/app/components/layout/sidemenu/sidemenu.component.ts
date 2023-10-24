import { Component } from '@angular/core';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss']
})
export class SidemenuComponent {

  classname: string = "disabled"

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


}

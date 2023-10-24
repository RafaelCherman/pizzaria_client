import {Component} from '@angular/core';
import {TableHeader} from "../../models/table-header";

@Component({
  selector: 'app-base-table',
  templateUrl: './base-table.component.html',
  styleUrls: ['./base-table.component.scss']
})
export class BaseTableComponent {

  headers: string[] = ["teste 1", "teste 2", "teste 3"];




  body: string[] = ["corpo 1", "corpo 20", "corpo 3"];

  constructor() {

  }




}

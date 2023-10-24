import { Component } from '@angular/core';
import {Pizzatipo} from "../../../../models/pizzatipo";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-tipopizzalist',
  templateUrl: './tipopizzalist.component.html',
  styleUrls: ['./tipopizzalist.component.scss']
})
export class TipopizzalistComponent {
  lista: Pizzatipo[] = [];


  constructor() {
    let tipo1 = new Pizzatipo();
    tipo1.id = 1;
    tipo1.nome = "Grande";
    tipo1.tamanho = "Grande";
    tipo1.valor = 50;
    tipo1.qntSabores = 2;

    let tipo2 = new Pizzatipo();
    tipo2.id = 2;
    tipo2.nome = "Média";
    tipo2.tamanho = "Média";
    tipo2.valor = 40;
    tipo2.qntSabores = 1;
    this.lista.push(tipo1);
    this.lista.push(tipo2);
  }


  editar(id:number) {

  }

  excluir(id: number) {

  }

  novo() {

  }
}

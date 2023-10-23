import { Component, inject } from '@angular/core';
import { Pedido } from 'src/app/models/pedido';
import { PedidoService } from 'src/app/services/pedido.service';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.scss']
})
export class PedidosComponent {

  pedidoService = inject(PedidoService);

  listAConfirmar: Pedido[] = [];
  listEmAndamento: Pedido[] = [];
  listFinalizado: Pedido[] = [];

  selecionado: string = "confirmar";

  constructor(){
    this.listAll();
  }

  selecionar(selecionado: string)
  {
    this.selecionado = selecionado;
  }

  listAll(){
    this.listAConfirmar = this.listBySituacao("AConfirmar");
    this.listEmAndamento = this.listBySituacao("EmAndamento");
    this.listFinalizado = this.listBySituacao("Finalizado");
  }

  listBySituacao(situacao: string): Pedido[]
  {
    let pedidos: Pedido[] = [];
    this.pedidoService.listBySituacao(situacao).subscribe({
      next: lista=>{
        pedidos = lista;
      },
      error: erro=>{
        console.log(erro);
      }
    });
    return pedidos;
  }
}

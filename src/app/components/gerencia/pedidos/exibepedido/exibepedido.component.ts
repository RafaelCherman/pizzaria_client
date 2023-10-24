import { Component, Input, OnInit, inject } from '@angular/core';
import { Pedido } from 'src/app/models/pedido';
import { PedidoService } from 'src/app/services/pedido.service';

@Component({
  selector: 'app-exibepedido',
  templateUrl: './exibepedido.component.html',
  styleUrls: ['./exibepedido.component.scss']
})
export class ExibepedidoComponent implements OnInit{

  pedidoService = inject(PedidoService);


  @Input() situacao: string = "";
  pedidos: Pedido[] = [];

  constructor(){}

  ngOnInit(): void {
    this.listBySituacao(this.situacao);
    
  }

  listBySituacao(situacao: string): Pedido[]
  {
    let pedidos: Pedido[] = [];
    this.pedidoService.listBySituacao(situacao).subscribe({
      next: lista=>{
        this.pedidos = lista;
      },
      error: erro=>{
        console.log(erro);
      }
    });
    return pedidos;
  }

  gerenciar(id: number)
  {

  }
}

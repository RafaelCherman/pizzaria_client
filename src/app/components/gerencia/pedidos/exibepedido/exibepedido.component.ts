import { Component, Input, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Pedido } from 'src/app/models/pedido';
import { PedidoService } from 'src/app/services/pedido.service';

@Component({
  selector: 'app-exibepedido',
  templateUrl: './exibepedido.component.html',
  styleUrls: ['./exibepedido.component.scss']
})
export class ExibepedidoComponent implements OnInit{

  pedidoService = inject(PedidoService);
  router = inject(Router);


  @Input() situacao: string = "";
  pedidos: Pedido[] = [];

  constructor(){}

  ngOnInit(): void {
  

    if(this.situacao != 'Todos')
    {
      this.listBySituacao(this.situacao);
    }
    else
    {
      
      this.listAll();
    }
  }

  listAll()
  {
    this.pedidoService.listAll().subscribe({
      next: lista=>{
        this.pedidos = lista;
      },
      error: erro=>{
        console.log(erro);
      }
    });
  }

  listBySituacao(situacao: string)
  {
    this.pedidoService.listBySituacao(situacao).subscribe({
      next: lista=>{
        this.pedidos = lista;
      },
      error: erro=>{
        console.log(erro);
      }
    });
  }

  gerenciar(id: number)
  {
    this.router.navigate(['admin/pedidos/editar/'+ id]);
  }
}

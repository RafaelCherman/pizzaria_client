import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pedido } from 'src/app/models/pedido';
import { PedidoService } from 'src/app/services/pedido.service';

@Component({
  selector: 'app-gerenciapedido',
  templateUrl: './gerenciapedido.component.html',
  styleUrls: ['./gerenciapedido.component.scss']
})
export class GerenciapedidoComponent {

  pedidoService = inject(PedidoService);  
  pedido: Pedido = new Pedido();

  roteador = inject(ActivatedRoute);
  router = inject(Router);

  id: any;

  constructor()
  {
    this.id = this.roteador.snapshot.paramMap.get('id');
    if(this.id != null)
    {
      this.findById(this.id);
    }
  }

  findById(id: any){
    this.pedidoService.findById(id).subscribe({
      next: pedido =>{
        this.pedido = pedido;
      },
      error: erro =>
      {
        console.log(erro);
      }
    })
  }

  edit(s: string)
  {
    this.pedido.situacaoPedido = s;
    this.pedidoService.edit(this.id, this.pedido).subscribe({
      next:  pedido =>{

      },
      error: erro =>
      {
        console.log(erro);
      }
    });
  }

  delete()
  {
    this.pedidoService.delete(this.id).subscribe({
      next: resposta =>{

      },
      error: erro =>
      {
        console.log(erro);
      }
    });
  }

  avancar(situacao: string)
  {
    this.edit(situacao);
  }

  recusar()
  {
    this.edit("Recusado");
    this.delete;
  }

  voltar(){
    this.router.navigate(["/pedidos"]);
  }
}

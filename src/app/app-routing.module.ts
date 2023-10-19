import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './components/layout/index/index.component';
import { LoginComponent } from './components/sistemas/login/login.component';
import { MenupedidoComponent } from './components/pedido/escolhapedido/menupedido/menupedido.component';
import { PedidoselecionarpizzaComponent } from './components/pedido/pedidoselecionarpizza/pedidoselecionarpizza.component';
import { PedidoselecionarprodutoComponent } from './components/pedido/pedidoselecionarproduto/pedidoselecionarproduto.component';
import { PedidocriarComponent } from './components/pedido/pedidocriar/pedidocriar.component';

const routes: Routes = [
  { path: "teste", component: IndexComponent},
  {path: "login", component: LoginComponent},
  {path: "menu", component: MenupedidoComponent},
  {path:"selecionaPizza", component: PedidoselecionarpizzaComponent},
  {path:"selecionarProduto", component: PedidoselecionarprodutoComponent},
  {path:"criapedido", component: PedidocriarComponent},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

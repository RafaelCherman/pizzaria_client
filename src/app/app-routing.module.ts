import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './components/layout/index/index.component';
import { LoginComponent } from './components/sistemas/login/login.component';
import { MenupedidoComponent } from './components/pedido/escolhapedido/menupedido/menupedido.component';
import {SidemenuComponent} from "./components/layout/sidemenu/sidemenu.component";
import {IndexadminComponent} from "./components/layout/admin/indexadmin/indexadmin.component";
import {TipopizzalistComponent} from "./components/gerencia/tipos/exibetipo/tipopizzalist.component";
import {PedidosComponent} from "./components/gerencia/pedidos/pedidos.component";
import {GerenciapedidoComponent} from "./components/gerencia/pedidos/gerenciapedido/gerenciapedido.component";

import { ExibesaborComponent } from './components/gerencia/sabores/exibesabor/exibesabor.component';
import { ExibeprodutoComponent } from './components/gerencia/produtos/exibeproduto/exibeproduto.component';
import {ExibefuncionarioComponent} from "./components/gerencia/funcionario/exibefuncionario/exibefuncionario.component";

const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: 'full'},
  {path: "login", component: LoginComponent},
  {path: "menu", component: MenupedidoComponent},
  {path: "menulateral", component: SidemenuComponent},
  {path: "admin", component: IndexadminComponent, children: [
      {path: "tipos", component: TipopizzalistComponent },
      {path: "sabores", component: ExibesaborComponent},
      {path: "produtos", component: ExibeprodutoComponent},
      {path: "pedidos", component: PedidosComponent},
      {path: "pedidos/editar/:id", component: GerenciapedidoComponent},
      {path: "funcionarios", component: ExibefuncionarioComponent}

    ]},
  { path: "user", component: IndexComponent, children:[
    {path: "menu", component: MenupedidoComponent},
  ]}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

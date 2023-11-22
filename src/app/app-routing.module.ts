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
import {SaboresComponent} from "./components/gerencia/sabores/sabores.component";
import {GerenciasaborComponent} from "./components/gerencia/sabores/gerenciasabor/gerenciasabor.component";
//import {TiposComponent} from "./components/gerencia/tipos/tipos.component";
import {GerenciatipoComponent} from "./components/gerencia/tipos/gerenciatipo/gerenciatipo.component";
import {ProdutosComponent} from "./components/gerencia/produtos/produtos.component";
import {GerenciaprodutoComponent} from "./components/gerencia/produtos/gerenciaproduto/gerenciaproduto.component";
import { ExibesaborComponent } from './components/gerencia/sabores/exibesabor/exibesabor.component';
import { ExibeprodutoComponent } from './components/gerencia/produtos/exibeproduto/exibeproduto.component';
import { rotaguardGuard } from './guards/rotaguard.guard';

const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: 'full'},
  {path: "login", component: LoginComponent},
  {path: "menu", component: MenupedidoComponent},
  {path: "menulateral", component: SidemenuComponent},
  {path: "admin", component: IndexadminComponent, canActivate:[rotaguardGuard], children: [
      {path: "tipos", component: TipopizzalistComponent },
      {path: "sabores", component: ExibesaborComponent},
      {path: "produtos", component: ExibeprodutoComponent},
      {path: "pedidos", component: PedidosComponent},
      {path: "pedidos/editar/:id", component: GerenciapedidoComponent},
      
    ]},
  { path: "user", component: IndexComponent, canActivate:[rotaguardGuard], children:[
    {path: "menu", component: MenupedidoComponent},
  ]}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

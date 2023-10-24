import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './components/layout/index/index.component';
import { LoginComponent } from './components/sistemas/login/login.component';
import { MenupedidoComponent } from './components/pedido/escolhapedido/menupedido/menupedido.component';
import {SidemenuComponent} from "./components/layout/sidemenu/sidemenu.component";
import {IndexadminComponent} from "./components/layout/admin/indexadmin/indexadmin.component";
import {TipopizzalistComponent} from "./components/layout/admin/tipopizzalist/tipopizzalist.component";

const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: 'full'},
  {path: "login", component: LoginComponent},
  {path: "menu", component: MenupedidoComponent},
  {path: "menulateral", component: SidemenuComponent},
  {path: "admin", component: IndexadminComponent, children: [
      {path: "tipoDePizza", component: TipopizzalistComponent }
    ]},
  { path: "user", component: IndexComponent, children:[
    {path: "menu", component: MenupedidoComponent},
  ]},
  {path: "menulateral", component: SidemenuComponent},
  {path: "pedidos", component: PedidosComponent},
  {path: "pedidos/editar/:id", component: GerenciapedidoComponent},
  {path: "sabores", component: SaboresComponent},
  {path: "sabores/novo", component: GerenciasaborComponent},
  {path: "sabores/editar/:id", component: GerenciasaborComponent},
  {path: "tipos", component: TiposComponent},
  {path: "tipos/novo", component: GerenciatipoComponent},
  {path: "tipos/editar/:id", component: GerenciatipoComponent},
  {path: "produtos", component: ProdutosComponent},
  {path: "produtos/novo", component: GerenciaprodutoComponent},
  {path: "produtos/editar/:id", component: GerenciaprodutoComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

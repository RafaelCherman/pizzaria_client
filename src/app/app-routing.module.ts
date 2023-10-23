import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './components/layout/index/index.component';
import { LoginComponent } from './components/sistemas/login/login.component';
import { MenupedidoComponent } from './components/pedido/escolhapedido/menupedido/menupedido.component';
import {SidemenuComponent} from "./components/layout/sidemenu/sidemenu.component";
import { PedidosComponent } from './components/gerencia/pedidos/pedidos.component';

const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: 'full'},
  {path: "login", component: LoginComponent},
  { path: "user", component: IndexComponent, children:[
    {path: "menu", component: MenupedidoComponent},
  ]},
  {path: "menulateral", component: SidemenuComponent},
  {path: "pedidos", component: PedidosComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

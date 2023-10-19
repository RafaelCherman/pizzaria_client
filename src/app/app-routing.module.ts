import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './components/layout/index/index.component';
import { LoginComponent } from './components/sistemas/login/login.component';
import { MenupedidoComponent } from './components/pedido/escolhapedido/menupedido/menupedido.component';

const routes: Routes = [
  { path: "teste", component: IndexComponent},
  {path: "login", component: LoginComponent},
  {path: "menu", component: MenupedidoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

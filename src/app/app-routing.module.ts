import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './components/layout/index/index.component';
import { LoginComponent } from './components/sistemas/login/login.component';
import { MenupedidoComponent } from './components/pedido/escolhapedido/menupedido/menupedido.component';
import {SidemenuComponent} from "./components/layout/sidemenu/sidemenu.component";
import {IndexadminComponent} from "./components/layout/admin/indexadmin/indexadmin.component";
import {TipopizzalistComponent} from "./components/layout/admin/tipopizzalist/tipopizzalist.component";

const routes: Routes = [
  { path: "", component: IndexComponent},
  {path: "login", component: LoginComponent},
  {path: "menu", component: MenupedidoComponent},
  {path: "menulateral", component: SidemenuComponent},
  {path: "admin", component: IndexadminComponent, children: [
      {path: "tipoDePizza", component: TipopizzalistComponent }
    ]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

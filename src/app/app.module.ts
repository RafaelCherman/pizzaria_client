import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './components/layout/index/index.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './components/sistemas/login/login.component';
import { PedidocriarComponent } from './components/pedido/pedidocriar/pedidocriar.component';
import { PedidoselecionarpizzaComponent } from './components/pedido/pedidoselecionarpizza/pedidoselecionarpizza.component';
import { PedidoselecionarprodutoComponent } from './components/pedido/pedidoselecionarproduto/pedidoselecionarproduto.component';
import { MenupedidoComponent } from './components/pedido/escolhapedido/menupedido/menupedido.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PedidopreencherenderecoComponent } from './components/pedido/pedidopreencherendereco/pedidopreencherendereco.component';
import { SidemenuComponent } from './components/layout/sidemenu/sidemenu.component';
import { IndexadminComponent } from './components/layout/indexadmin/indexadmin.component';
import { PedidosComponent } from './components/gerencia/pedidos/pedidos.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    FooterComponent,
    PedidocriarComponent,
    PedidoselecionarpizzaComponent,
    PedidoselecionarprodutoComponent,
    MenupedidoComponent,
    PedidopreencherenderecoComponent,
    SidemenuComponent,
    IndexadminComponent,
    PedidosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

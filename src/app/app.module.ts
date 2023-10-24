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
import { IndexadminComponent } from './components/layout/admin/indexadmin/indexadmin.component';
import { MenuadminComponent } from './components/layout/admin/menuadmin/menuadmin.component';
import { HeaderadminComponent } from './components/layout/admin/headeradmin/headeradmin.component';
import { TipopizzalistComponent } from './components/layout/admin/tipopizzalist/tipopizzalist.component';
import { IndexadminComponent } from './components/layout/indexadmin/indexadmin.component';
import { PedidosComponent } from './components/gerencia/pedidos/pedidos.component';
import { ExibepedidoComponent } from './components/gerencia/pedidos/exibepedido/exibepedido.component';
import { GerenciapedidoComponent } from './components/gerencia/pedidos/gerenciapedido/gerenciapedido.component';
import { SaboresComponent } from './components/gerencia/sabores/sabores.component';
import { TiposComponent } from './components/gerencia/tipos/tipos.component';
import { ProdutosComponent } from './components/gerencia/produtos/produtos.component';
import { ExibetipoComponent } from './components/gerencia/tipos/exibetipo/exibetipo.component';
import { GerenciatipoComponent } from './components/gerencia/tipos/gerenciatipo/gerenciatipo.component';
import { ExibesaborComponent } from './components/gerencia/sabores/exibesabor/exibesabor.component';
import { GerenciasaborComponent } from './components/gerencia/sabores/gerenciasabor/gerenciasabor.component';
import { ExibeprodutoComponent } from './components/gerencia/produtos/exibeproduto/exibeproduto.component';
import { GerenciaprodutoComponent } from './components/gerencia/produtos/gerenciaproduto/gerenciaproduto.component';
import { ClientecriarComponent } from './components/cliente/clientecriar/clientecriar.component';

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
    MenuadminComponent,
    HeaderadminComponent,
    TipopizzalistComponent,
    PedidosComponent,
    ExibepedidoComponent,
    GerenciapedidoComponent,
    SaboresComponent,
    TiposComponent,
    ProdutosComponent,
    ExibetipoComponent,
    GerenciatipoComponent,
    ExibesaborComponent,
    GerenciasaborComponent,
    ExibeprodutoComponent,
    GerenciaprodutoComponent,
    ClientecriarComponent,
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

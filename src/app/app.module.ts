import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MenuTestPage } from '../pages/menu-test/menu-test';
import { PerfilPage } from '../pages/perfil/perfil';
import { EnderecosPage } from '../pages/enderecos/enderecos';
import { UltimosPedidosPage } from '../pages/ultimos-pedidos/ultimos-pedidos';
import { FaleConoscoPage } from '../pages/fale-conosco/fale-conosco';
import { AjudaPage } from '../pages/ajuda/ajuda';
import { ConfiguracoesPage } from '../pages/configuracoes/configuracoes';
import { SairPage } from '../pages/sair/sair';
import { CadastroUsuarioPage } from '../pages/cadastro-usuario/cadastro-usuario';
import { LoginPage } from '../pages/login/login';
import { BuscaPage } from '../pages/busca/busca';
import { CestaPage } from '../pages/cesta/cesta';
import { TabsPage } from '../pages/tabs/tabs';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MenuTestPage,
    PerfilPage,
    EnderecosPage,
    UltimosPedidosPage,
    FaleConoscoPage,
    AjudaPage,
    ConfiguracoesPage,
    SairPage,
    CadastroUsuarioPage,
    LoginPage,
    BuscaPage,
    CestaPage,
    TabsPage,
    ContactPage,
    AboutPage

  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MenuTestPage,
    PerfilPage,
    EnderecosPage,
    UltimosPedidosPage,
    FaleConoscoPage,
    AjudaPage,
    ConfiguracoesPage,
    SairPage,
    CadastroUsuarioPage,
    LoginPage,
    BuscaPage,
    CestaPage,
    TabsPage,
    ContactPage,
    AboutPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}

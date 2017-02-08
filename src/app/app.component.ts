import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, NavController } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
//pages
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
import { CodigoBarrasPage } from '../pages/codigo-barras/codigo-barras';
import { CestaPage } from '../pages/cesta/cesta';
import { TabsPage } from '../pages/tabs/tabs';
//prividers
import { ClienteService } from '../providers/cliente-service';
import { BuscaProdutoService } from '../providers/busca-produto-service';
import { ProdutosClienteService } from '../providers/produtos-cliente-service';
import { ProdutosClienteSqlService } from '../providers/produtos-cliente-sql-service';


@Component({
  templateUrl: 'app.html',
  providers: [BuscaProdutoService, ClienteService, ProdutosClienteService, ProdutosClienteSqlService]

})
export class MyApp {
  rootPage = TabsPage;
  pages: Array<{component: any, title: string, icon: string}>;
  logado : boolean = true;
  @ViewChild('menuContent') navCtrl : NavController

  constructor(platform: Platform,
              private menuCtrl: MenuController) {

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });

    if (this.logado) {
      this.pages = [
        {component: PerfilPage, title: 'Perfil', icon: 'contact'},
        {component: EnderecosPage, title: 'Meus Endereços', icon: 'pin'},
        {component: UltimosPedidosPage, title: 'Últimos Pedidos', icon: 'basket'},
        {component: FaleConoscoPage, title: 'Fale Conosco', icon: 'call'},
        {component: AjudaPage, title: 'Ajuda', icon: 'information'},
        {component: ConfiguracoesPage, title: 'Configurações', icon: 'cog'},
        {component: SairPage, title: 'Sair', icon: 'exit'}
      ];
    } else {
      let page : any = LoginPage;
      this.rootPage = page;
    }
  }
  //Exemple action to class
  clicked() : void {
    console.log('I was clicked!');
  }

  openPage(page: any) : void {
    console.log('Opening '+page.title);
    this.navCtrl.push(page.component);
    //this.rootPage = page.component;
    this.menuCtrl.close();
  }
}

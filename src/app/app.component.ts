import { Component } from '@angular/core';
import { Platform, MenuController } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { HomePage } from '../pages/home/home';
import { MenuTestPage } from '../pages/menu-test/menu-test';
import { PerfilPage } from '../pages/perfil/perfil';
import { EnderecosPage } from '../pages/enderecos/enderecos';
import { UltimosPedidosPage } from '../pages/ultimos-pedidos/ultimos-pedidos';
import { FaleConoscoPage } from '../pages/fale-conosco/fale-conosco';
import { AjudaPage } from '../pages/ajuda/ajuda';
import { ConfiguracoesPage } from '../pages/configuracoes/configuracoes';
import { SairPage } from '../pages/sair/sair';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage = HomePage;
  pages: Array<{component: any, title: string, icon: string}>;

  constructor(platform: Platform, private menuCtrl: MenuController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });

    this.pages = [
      {component: HomePage, title: 'Home', icon: 'home'},
      {component: PerfilPage, title: 'Perfil', icon: 'menu'},
      {component: EnderecosPage, title: 'Meus Endereços', icon: 'menu'},
      {component: UltimosPedidosPage, title: 'Últimos Pedidos', icon: 'menu'},
      {component: FaleConoscoPage, title: 'Fale Conosco', icon: 'menu'},
      {component: AjudaPage, title: 'Ajuda', icon: 'menu'},
      {component: ConfiguracoesPage, title: 'Configurações', icon: 'menu'},
      {component: SairPage, title: 'Sair', icon: 'menu'}
    ];
  }
  //Exemple action to class
  clicked() : void {
    console.log('I was clicked!');
  }

  openPage(page: any) : void {
    console.log('Opening '+page.title);
    this.rootPage = page.component;
    this.menuCtrl.close();
  }
}

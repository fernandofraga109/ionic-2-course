import { Component } from '@angular/core';

import { BuscaPage } from '../busca/busca';
import { CestaPage } from '../cesta/cesta';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tabs: Array<{component: any, title: string, icon: string}>;

  tab2Root: any = BuscaPage;
  tab3Root: any = CestaPage;

  constructor() {
    this.tabs = [
      {component: BuscaPage, title: 'Buscar', icon: 'search'},
      {component: CestaPage, title: 'Cesta', icon: 'basket'}
    ];
  }
}

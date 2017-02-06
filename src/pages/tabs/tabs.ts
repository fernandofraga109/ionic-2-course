import { Component } from '@angular/core';

import { BuscaPage } from '../busca/busca';
import { CodigoBarrasPage } from '../codigo-barras/codigo-barras';
import { CestaPage } from '../cesta/cesta';
import { ProdutosClienteService } from '../../providers/produtos-cliente-service';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tabs: Array<{component: any, title: string, icon: string}>;

  tab2Root: any = BuscaPage;
  tab3Root: any = CestaPage;
  tab4Root: any = CodigoBarrasPage;
  qtdProdutos: number = 0;

  constructor(public produtosClienteService :ProdutosClienteService) {
    this.tabs = [
      {component: BuscaPage, title: 'Buscar', icon: 'search'},
      {component: CestaPage, title: 'Cesta', icon: 'basket'}
    ];
  }

  getQtdProdutos() {
    this.qtdProdutos = this.produtosClienteService.getQtdProdutos();
    return this.qtdProdutos;
  }



}

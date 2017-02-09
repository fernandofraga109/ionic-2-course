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
  produtos: any[];

  constructor(public produtosClienteService :ProdutosClienteService) {
    this.tabs = [
      {component: BuscaPage, title: 'Buscar', icon: 'search'},
      {component: CestaPage, title: 'Cesta', icon: 'basket'}
    ];
    this.produtos = [];
  }

  getQtdProdutos() {
    return this.produtos.length;
  }
  
  
  
   ionViewDidEnter() {
    this.mudouAba();
    console.log('ionV');
  }
  
  mudouAba() {
    this.produtos = [];
    this.produtosClienteService.getAll().then((res) => {
      if (res !=null) {
        
       for (let i = 0; i < res.length; i++) {
          this.produtos.push(JSON.parse(res[i].value));
        }
      } else {
        console.log(res,"NENHUM PRODUTO");
      } 

      }).catch((err) => {
        console.log(err);
        return false;
      });
  }
 
  
}

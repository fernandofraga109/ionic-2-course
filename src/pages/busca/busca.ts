import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BuscaProdutoService } from '../../providers/busca-produto-service';
import { ProdutoDetalhesPage } from '../produto-detalhes/produto-detalhes';

@Component({
  selector: 'page-busca',
  templateUrl: 'busca.html',
  
})
export class BuscaPage {

  searchQuery: string = '';
  items: any[];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public buscaProdutoService : BuscaProdutoService,) {
    this.initializeItems();

  }

  initializeItems() {

  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.buscaProdutoService.getProdutoPorNome(val).then((res) => {
          let json = res.json();
          console.log(json.msg);
          this.items = json.produtos;

        }).catch((err) => {
          console.log(err);
        });

    }
  }

  openDetalhesProduto(produto: any) : void {
    console.log('Opening '+produto.nome_prod);

    let page : any = ProdutoDetalhesPage;
    this.navCtrl.push(page, produto);

    //this.rootPage = page.component;

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BuscaPage');
  }

}

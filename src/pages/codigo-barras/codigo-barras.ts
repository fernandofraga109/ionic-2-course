import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BuscaProdutoService } from '../../providers/busca-produto-service';
import { ProdutoDetalhesPage } from '../produto-detalhes/produto-detalhes';

/*
  Generated class for the CodigoBarras page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-codigo-barras',
  templateUrl: 'codigo-barras.html'
})
export class CodigoBarrasPage {
  
  searchQuery: string = '';
  items: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams,public buscaProdutoService : BuscaProdutoService) {}
  
  
   initializeItems() {

  }
  
  
  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.buscaProdutoService.getProdutoPorCodigoBarras(val).then((res) => {
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
    console.log('ionViewDidLoad CodigoBarrasPage');
  }

}

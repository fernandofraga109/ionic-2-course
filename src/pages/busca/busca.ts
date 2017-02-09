import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { App } from 'ionic-angular';
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
              public modalCtrl: ModalController,
              public navParams: NavParams,
              public buscaProdutoService : BuscaProdutoService, private app: App) {
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
    this.app.getRootNav().push(page, produto);
    
    /*let modal = this.modalCtrl.create(page, produto);
    modal.present();*/
    
    //this.rootPage = page.component;

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BuscaPage');
  }

}

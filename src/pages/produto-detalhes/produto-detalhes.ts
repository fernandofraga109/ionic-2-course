import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the ProdutoDetalhes page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-produto-detalhes',
  templateUrl: 'produto-detalhes.html'
})
export class ProdutoDetalhesPage {

    produto: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.produto = navParams;
    this.produto = this.produto.data;
    console.log(this.produto,'aquiiii!');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProdutoDetalhesPage');
  }

}

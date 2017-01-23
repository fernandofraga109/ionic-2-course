import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BuscaProdutoService } from '../../providers/busca-produto-service';

/*
  Generated class for the Enderecos page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-enderecos',
  templateUrl: 'enderecos.html',
  providers: [BuscaProdutoService]
})
export class EnderecosPage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private buscaProdutoService : BuscaProdutoService) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad EnderecosPage');
  }

  buscarCep() : void {
    this.buscaProdutoService.getProduto('90620130')
      .then((res) => {
        console.log(res);
      }).catch((err) => {
        console.log(err);
      });
  }

}

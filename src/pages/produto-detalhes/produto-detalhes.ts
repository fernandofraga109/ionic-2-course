import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { ProdutosClienteService } from '../../providers/produtos-cliente-service';

@Component({
  selector: 'page-produto-detalhes',
  templateUrl: 'produto-detalhes.html'
})
export class ProdutoDetalhesPage {

    produto: any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public produtosClienteService :ProdutosClienteService,
              public toastCtrl: ToastController) {
    this.produto = navParams;
    this.produto = this.produto.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProdutoDetalhesPage');
  }


  addProdutoCesta(produto) : void {
    if (this.produtosClienteService.produtoJaNaCesta(produto)) {
      let toast = this.toastCtrl.create({
        message: 'Produto já esta na cesta de compras.',
        duration: 3000
      });
      toast.present();
    } else {
      this.produtosClienteService.addProduto(produto);

      let toast = this.toastCtrl.create({
        message: ''+ produto.prod_nome +' adicionado a cesta de compras.',
        duration: 3000
      });
      toast.present();
    }
  }

}

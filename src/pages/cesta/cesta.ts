import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ProdutosClienteService } from '../../providers/produtos-cliente-service';


@Component({
  selector: 'page-cesta',
  templateUrl: 'cesta.html'
})
export class CestaPage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public produtosClienteService :ProdutosClienteService) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad CestaPaged');
  }

  getProdutos() {
    return this.produtosClienteService.getProdutos();
  }
  
  
  decrementaQtd(produto) : void {
    if (this.produtosClienteService.produtoJaNaCesta(produto)) {
      this.produtosClienteService.decrementaQtdProduto(produto);
    }
  }
  
  incrementaQtd(produto) : void {
    if (this.produtosClienteService.produtoJaNaCesta(produto)) {
      this.produtosClienteService.incrementaQtdProduto(produto);
    } 
  }

}

import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { ProdutosClienteService } from '../../providers/produtos-cliente-service';


@Component({
  selector: 'page-cesta',
  templateUrl: 'cesta.html'
})
export class CestaPage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public produtosClienteService :ProdutosClienteService,
              public alertCtrl: AlertController ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad CestaPaged');
  }

  getProdutos() {
    return this.produtosClienteService.getProdutos();
  }
  
  getQtdProdutos() {
    return this.produtosClienteService.getQtdProdutos();
  }
  
  getTotalValorItens() {
    return this.produtosClienteService.getTotalValorItens();
  }
  
  decrementaQtd(produto) : void {
    if (produto.quantidade == 1) {
      let confirm = this.alertCtrl.create({
      title: 'Confirmacao',
      message: 'Confirma exclusao do produto '+ produto.prod_nome  + ' ?',
      buttons: [
        {
          text: 'Cancelar',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Confirmar',
          handler: () => {
            this.produtosClienteService.removeProduto(produto);
          }
        }
      ]
    });
    confirm.present();
  
      
    } else {
       
      if (this.produtosClienteService.produtoJaNaCesta(produto)) {
        this.produtosClienteService.decrementaQtdProduto(produto);
      }
    }
  }
  
   cancelar() : void {
    
      let confirm = this.alertCtrl.create({
      title: 'Confirmacao',
      message: 'Confirma o cancelamento esvaziar a cesta de compras? ',
      buttons: [
        {
          text: 'Cancelar',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Confirmar',
          handler: () => {
            this.produtosClienteService.removeTodosProdutos();
          }
        }
      ]
    });
    confirm.present();
  
      
    
  }
  
  incrementaQtd(produto) : void {
    if (this.produtosClienteService.produtoJaNaCesta(produto)) {
      this.produtosClienteService.incrementaQtdProduto(produto);
    } 
  }

}

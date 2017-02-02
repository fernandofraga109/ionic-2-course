import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { ProdutosClienteService } from '../../providers/produtos-cliente-service';
import { SqlService } from '../../providers/sql-service';

@Component({
  selector: 'page-produto-detalhes',
  templateUrl: 'produto-detalhes.html'
})
export class ProdutoDetalhesPage {

    produto: any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public produtosClienteService :ProdutosClienteService,
              public toastCtrl: ToastController,
              public sqlService: SqlService) {
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
      console.log(produto, "proddd");
      this.sqlService.removeAll();
      let jsonEnvia : string = JSON.stringify(produto);
      this.sqlService.set(produto.prod_id, jsonEnvia);
      this.sqlService.get(produto.prod_id).then((res) => {
          console.log(JSON.parse(res), 'agora vai');

        }).catch((err) => {
          console.log(err);
        });
      
      

      let toast = this.toastCtrl.create({
        message: ''+ produto.prod_nome +' adicionado a cesta de compras.',
        duration: 3000
      });
      toast.present();
    }
  }
  
  decrementaQtd(produto) : void {
    if (this.produtosClienteService.produtoJaNaCesta(produto)) {
      this.produtosClienteService.decrementaQtdProduto(produto);
    } else {
        if (produto.quantidade > 1) {
        this.produto.quantidade = produto.quantidade-1;
      }
    }
  }
  
  incrementaQtd(produto) : void {
    if (this.produtosClienteService.produtoJaNaCesta(produto)) {
      this.produtosClienteService.incrementaQtdProduto(produto);
    } else {
    
      console.log('incrmenta');
      this.produto.quantidade = produto.quantidade+1;
    }
  }
  

}

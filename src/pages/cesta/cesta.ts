import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { ProdutosClienteService } from '../../providers/produtos-cliente-service';


@Component({
  selector: 'page-cesta',
  templateUrl: 'cesta.html'
})
export class CestaPage {
  
  produtos: any[];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public produtosClienteService :ProdutosClienteService,
              public alertCtrl: AlertController ) {
    this.produtos = [];
  }

  
   
  
  carregaProdutos() {
    this.produtos = [];
    this.produtosClienteService.getAll().then((res) => {
      if (res !=null) {
        
       for (let i = 0; i < res.length; i++) {
         console.log(i,"ENTROU NO ÇACO");
       
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
 
  ionViewWillEnter() {
    this.carregaProdutos();
    console.log('ionViewDidLoad CestaPaged');
  }
  
  ionViewDidLoad() {
    this.carregaProdutos();
    console.log('ionViewDidLoad CestaPaged');
  }
  
  

  getProdutos() {
    return this.produtos;
  }
  
  getQtdProdutos() {
    return this.produtos.length;
  }
  
  getTotalValorItens() {
    let total :number = 0.0;
    for (let i = 0; i < this.produtos.length; i++) {
        total = total +this.produtos[i].pf_valor;
     }
    return total
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
            this.produtosClienteService.remove(produto.prod_id);
            this.navCtrl.setRoot(this.navCtrl.getActive().component);  
          
          }
        }
      ]
    });
    confirm.present();
  
      
    } else {
       
      produto.quantidade = produto.quantidade-1; 
      this.produtosClienteService.updateProduto(produto);
      this.navCtrl.setRoot(this.navCtrl.getActive().component);
      
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
            this.navCtrl.setRoot(this.navCtrl.getActive().component);  
          }
        }
      ]
    });
    confirm.present();
  
      
    
  }
  
  incrementaQtd(produto) : void {
    produto.quantidade = produto.quantidade+1; 
    this.produtosClienteService.updateProduto(produto);
    this.navCtrl.setRoot(this.navCtrl.getActive().component);
  }

}

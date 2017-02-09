import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Platform } from 'ionic-angular';
import 'rxjs/add/operator/map';
import { SqlService } from './sql-service';

@Injectable()
export class ProdutosClienteService extends SqlService {

  produtos: any[];

  constructor(public http: Http, public platform: Platform) {
    super(platform, "produtoCesta");
    this.produtos = [];
  } 

  addProduto(produto) {
    let jsonProduto : string = JSON.stringify(produto);
    this.set(produto.prod_id, jsonProduto);
    
    this.produtos.push(produto);
  }
  
  updateProduto(produto) {
    let jsonProduto : string = JSON.stringify(produto);
    this.update(produto.prod_id, jsonProduto);
  }

  removeProduto(produto) {
    this.remove(produto.prod_id);
    this.produtos = this.produtos.filter(prod => prod.prod_id !== produto.prod_id);
  }
  
  removeTodosProdutos() {
    this.removeAll();
    this.produtos = [];
  }

  /*  NAO USAR */
  produtoJaNaCesta(produto): boolean {
    let jaNaCesta: boolean = false;
    
    
    this.get(produto.prod_id).then((res) => {
      
      if (res !=null) {
        jaNaCesta = true;
        console.log(jaNaCesta," ja ne cesta 1");
        return true;
      } 

      }).catch((err) => {
        console.log(err);
        return false;
      });
    return jaNaCesta;
  }

  decrementaQtdProduto(produto) {
    
    
    
    if (produto.quantidade > 1) {
      
      
      
      for (let i = 0; i < this.produtos.length; i++) {
        if (this.produtos[i].prod_id == produto.prod_id) {
          this.produtos[i].quantidade = produto.quantidade-1;
        }
      }
    }
  }
    
  incrementaQtdProduto(produto) {
    for (let i = 0; i < this.produtos.length; i++) {
      console.log(this.produtos[i], 'iterate');
      console.log(produto, 'produto');
      if (this.produtos[i].prod_id == produto.prod_id) {
        this.produtos[i].quantidade = produto.quantidade+1;
      }
    }
  }


}

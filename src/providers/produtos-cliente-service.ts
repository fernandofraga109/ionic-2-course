import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProdutosClienteService {

  produtos: any[];

  constructor(public http: Http) {
    this.produtos = [];
  }

  addProduto(produto) {
    console.log(this.produtos, 'prods');
    console.log(produto, 'prod');
    this.produtos.push(produto);
  }

  removeProduto(produto) {
    this.produtos = this.produtos.filter(prod => prod.prod_id !== produto.prod_id);
  }

  produtoJaNaCesta(produto): boolean {

    let c = this.produtos.filter(item => item.prod_id == produto.prod_id);
    //let p = this.produtos.filter(prod => prod === produto);
    if (c.length > 0) {
      return true;
    }
    return false;
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


  getProdutos() {
    return this.produtos;
  }

  getQtdProdutos() {
    return this.produtos.length;
  }

}

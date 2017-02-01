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
    this.produtos = this.produtos.filter(prod => prod !== produto);
  }

  produtoJaNaCesta(produto) : boolean {
    let p = this.produtos.filter(prod => prod === produto);
    if (p.length>0) {
      return true;
    }
    return false;
  }

  getProdutos() {
    return this.produtos;
  }

  getQtdProdutos() {
    return this.produtos.length;
  }

}

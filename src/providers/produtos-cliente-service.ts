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
    
    
  }
  

}

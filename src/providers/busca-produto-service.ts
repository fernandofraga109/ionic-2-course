import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class BuscaProdutoService {

  constructor(public http: Http) {
    console.log('Hello BuscaProdutoService Provider');
  }

  getProduto(cep: string) : Promise<Response> {
    return this.http.get('https://viacep.com.br/ws/'+ cep.trim() +'/json/').toPromise();
  }

}

import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

/*
  Generated class for the ClienteService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ClienteService {

  constructor(public http: Http) {
    console.log('Hello ClienteService Provider');
  }

  cadastra(user : any) : Promise<Response> {
    console.log('User: ', user);
    return this.http.post('http://hml.pharmobile.com.br/api/cliente/cadastra/', user).toPromise();
  }


}

import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Platform } from 'ionic-angular';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { SqlService } from './sql-service';
import { Cliente } from '../models/cliente';

@Injectable()
export class ClienteService extends SqlService {

    constructor( public http: Http,
        public cliente: Cliente,    
        public platform: Platform ) {
        super( platform, "cliente" );
        console.log( 'Hello ClienteService Provider' );
    }

    cadastra( user: any ): Promise<Response> {
        console.log( 'User: ', user );
        let headers = new Headers( { 'Content-Type': 'application/json' });
        let options = new RequestOptions( { headers: headers });
        return this.http.post( 'http://hml.pharmobile.com.br/api/cliente/cadastra/', user, options ).toPromise();
    }

   

}

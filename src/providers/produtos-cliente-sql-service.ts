import { Injectable} from '@angular/core';
import { Platform } from 'ionic-angular';
import { SqlService } from './sql-service';


@Injectable()
export class ProdutosClienteSqlService extends SqlService {
    
  constructor(public platform: Platform) {
      super(platform, "produtoCesta");
  }
  
}
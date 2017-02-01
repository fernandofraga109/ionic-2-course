import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { BuscaProdutoService } from '../../providers/busca-produto-service';

/*
  Generated class for the Enderecos page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-enderecos',
  templateUrl: 'enderecos.html'
})
export class EnderecosPage {

  user: string = 'nome';

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private buscaProdutoService : BuscaProdutoService,
              public alertCtrl : AlertController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad EnderecosPage');
  }

  buscarCep() : void {
    this.buscaProdutoService.getProduto('90620130')
      .then((res) => {
        let json = res.json();
        console.log(json);
        let alert = this.alertCtrl.create({
          title: 'Consumo de serviço',
          message: json.msg + '',

        /*  inputs: [
            {
              name: 'nome',
              placeholder: 'Seu nome'
            }
          ],

          buttons: [
            {
              text: 'Cancelar'
            },
            {
              text: 'Ok',
              handler: (data) => {
                this.user = data.nome;
              }
            }
        ]*/

          buttons: ['Ok']
        });
        alert.present(alert);

      }).catch((err) => {
        console.log(err);
      });
  }

}

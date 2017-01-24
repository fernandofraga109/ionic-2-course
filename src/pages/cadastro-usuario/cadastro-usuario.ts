import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { ClienteService } from '../../providers/cliente-service';


@Component({
  selector: 'page-cadastro-usuario',
  templateUrl: 'cadastro-usuario.html',
  providers : [ClienteService]
})
export class CadastroUsuarioPage {

  user : any = {};
  dataNascimento : string = 'Jan 01, 1990';
  passwordConfirm : string = '';

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private clienteService : ClienteService,
              public alertCtrl : AlertController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroUsuarioPage');
  }

  cadastrar() {
    if (this.passwordConfirm != this.user.password) {
      let alert = this.alertCtrl.create({
        title: 'Cadastro de Usuário',
        message: 'Confirmação de Senha não confere com Senha',
        buttons: ['Ok']
      });
      alert.present(alert);

    } else {
        this.user.data_nascimento = this.dataNascimento;
        this.clienteService.cadastra(this.user)
        .then((res) => {
          let json = res.json();
          console.log("Salvou Cliente!");
          let alert = this.alertCtrl.create({
            title: 'Cadastro de Usuário',
            message: 'Cadastro efetuado com sucesso!',
            buttons: ['Ok']
          });
          alert.present(alert);

        }).catch((err) => {
          console.log(err);
        });

    }
  }

}

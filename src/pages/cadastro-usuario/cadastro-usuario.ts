import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { ClienteService } from '../../providers/cliente-service';


@Component({
  selector: 'page-cadastro-usuario',
  templateUrl: 'cadastro-usuario.html'

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
        this.user.data_nascimento = '12/12/2050';
        let jsonEnvia : string = JSON.stringify(this.user);
        this.clienteService.cadastra('{"cadastro": '+jsonEnvia+'}')
        .then((res) => {
          let json = res.json();
          console.log("Salvou Cliente!", json.cliente.pin);
          let jsonCliente: string = JSON.stringify( this.user );
          this.clienteService.set(json.cliente.pin, jsonCliente);
          
          this.clienteService.get(json.cliente.pin).then((resp) => {
              
               console.log(resp, "volta do sql");

              }).catch((err) => {
                console.log(err);
                return false;
              });
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

  cancelar() {
    this.navCtrl.pop();
  }

}

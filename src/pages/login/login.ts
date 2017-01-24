import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, ModalController} from 'ionic-angular';
import { CadastroUsuarioPage } from '../cadastro-usuario/cadastro-usuario';

/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  user : any = {};

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public modalCtrl: ModalController,
              public alertCtrl : AlertController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  efetuarLogin() {
    let alert = this.alertCtrl.create({
        title: 'Entrando...',
        message: 'Login: '+this.user.login + ' Senha: '+this.user.password
      });
      alert.present(alert);
  }

  efetuarCadastro() {
  /*  let modal = this.modalCtrl.create(CadastroUsuarioPage);
    modal.present();*/
    let page : any = CadastroUsuarioPage;
    this.navCtrl.push(page);
  }

}

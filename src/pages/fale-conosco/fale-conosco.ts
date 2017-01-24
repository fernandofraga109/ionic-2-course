import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-fale-conosco',
  templateUrl: 'fale-conosco.html'
})
export class FaleConoscoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad FaleConoscoPage');
  }

}

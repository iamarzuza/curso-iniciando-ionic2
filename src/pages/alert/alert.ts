import { Component } from '@angular/core';
import { AlertController, NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Alert page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-alert',
  templateUrl: 'alert.html'
})
export class AlertPage {

  constructor(public alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlertPage');
  }

  mostraAlertSimples () {

      let alert = this.alertCtrl.create({
        title: 'Mensagem!',
        subTitle: 'Atenção muita atenção ! xxxx',
        buttons: ['OK']
      });
      alert.present();
  }





}

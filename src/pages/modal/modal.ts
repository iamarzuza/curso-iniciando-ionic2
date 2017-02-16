import { Component } from '@angular/core';
import { NavController, NavParams, ModalController  } from 'ionic-angular';
import { ModalLoginPage } from '../modal-login/modal-login';
/*
  Generated class for the Modal page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html'
})
export class ModalPage {

  constructor(public modalCtrl: ModalController  ) {}

  //user : { nome : string , senha : string };
  user = { nome : "" , senha : "" };

  openModal() {
      // {acao:"logar"}
      let modal = this.modalCtrl.create (ModalLoginPage,  this.user);
      modal.present ();

      modal.onDidDismiss ( (param) => {
          this.user = param;
      });
  }



}

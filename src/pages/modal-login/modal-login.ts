import { Component } from '@angular/core';
import { NavController,  ViewController, NavParams } from 'ionic-angular';

/*
  Generated class for the ModalLogin page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-modal-login',
  templateUrl: 'modal-login.html'
})

export class ModalLoginPage {

  user = { nome: "", senha: ""};
  //acao: string;
  constructor(public navCtrl: NavController, public view : ViewController, public navParams: NavParams) {

     this.user.nome = navParams.get("nome");
     this.user.senha = navParams.get("senha");
     //this.acao = navParams.get("acao");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalLoginPage');
  }

  logar() {
    this.view.dismiss( this.user );
  }
  close() {
    this.view.dismiss();
  }

}

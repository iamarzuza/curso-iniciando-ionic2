import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ConectService } from "../../providers/conect-service"

/*
  Generated class for the Cliente page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-cliente',
  templateUrl: 'cliente.html'
})
export class ClientePage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private conectService : ConectService) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClientePage');
  }

  buscarCEP () : void  {
      console.log("Chamando o busca CEP");

      this.conectService.getCep("74884613").then( (resp) => {
         console.log(resp);
         }
      ).catch ( (err) => {
         console.log(err);
      })
  }

}

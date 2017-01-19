import { Component } from '@angular/core';

import { NavController, MenuController } from 'ionic-angular';
import { ProdutoPage } from '../produto/produto'

@Component({

  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public menuCtrl : MenuController) {

  }

  pushPage() {
    this.navCtrl.push( ProdutoPage );
  }

  openMenu() {
    this.menuCtrl.open("right");
  }

  closeMenu() {
    this.menuCtrl.close();
  }

  toggleMenu() {
    this.menuCtrl.toggle();
  }

}

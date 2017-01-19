import { Component } from '@angular/core';
import { Platform, MenuController } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { HomePage } from '../pages/home/home';
import { ClientePage } from '../pages/cliente/cliente';
import { ProdutoPage } from '../pages/produto/produto';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  rootPage = HomePage;
  pages : Array<{ component : any, nome : string, icon : string }> ;

  constructor(platform: Platform, public menuCtrl: MenuController) {

    this.pages = [
      { component: HomePage, nome : "Página Inicial", icon : "home"  },
      { component: ClientePage, nome : "Clientes", icon : "body"},
      { component: ProdutoPage, nome : "Produtos", icon : "flower"}
    ];

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  // p : any
  openPage (p) {
      this.rootPage = p.component;
      //console.log ("Teste" + p.nome );
      this.menuCtrl.close();
  }

  abriuMenu() {
    console.log("abriu menu");
  }


}

import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { HomePage } from '../pages/home/home';
import { ClientePage } from '../pages/cliente/cliente';
import { ProdutoPage } from '../pages/produto/produto';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  rootPage = HomePage;
  pages : Array<{ component : any, nome : string }> ;

  constructor(platform: Platform) {

    this.pages = [
      { component: HomePage, nome : "Página Inicial"},
      { component: ClientePage, nome : "Clientes"},
      { component: ProdutoPage, nome : "Produtos"}
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
      console.log ("Teste" + p.nome );
  }

}

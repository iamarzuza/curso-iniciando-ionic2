import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ClientePage } from '../pages/cliente/cliente';
import { ProdutoPage } from '../pages/produto/produto';
import { AlertPage } from '../pages/alert/alert';
import { BotaoPage } from '../pages/botao/botao';
import { CardPage } from '../pages/card/card';
import { ModalPage } from '../pages/modal/modal';
import { ModalLoginPage } from '../pages/modal-login/modal-login';
import { ConectService } from "../providers/conect-service"

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ClientePage,
    ProdutoPage,
    AlertPage,
    CardPage,
    ModalPage,
    ModalLoginPage,
    BotaoPage
  ],
  imports: [
    IonicModule.forRoot(MyApp,{
      menuType: 'overlay',
      platforms: {
        ios: {
          menuType: 'overlay',
        }
      }
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ClientePage,
    ProdutoPage,
    AlertPage,
    CardPage,
    ModalPage,
    ModalLoginPage,
    BotaoPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, ConectService]
})
export class AppModule {}

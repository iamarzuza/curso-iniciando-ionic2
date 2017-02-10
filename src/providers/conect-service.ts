import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

/*
  Generated class for the ConectService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ConectService {

  constructor(public http: Http) {
    console.log('Hello ConectService Provider');
  }

  getCep ( cep: string) : Promise<Response>  {
      //return  this.http.get("").map(res => res.json()).toPromise();
      return  this.http.get( "https://viacep.com.br/ws/" + cep + "/json/").toPromise();
  }

}

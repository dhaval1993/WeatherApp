import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
/*
  Generated class for the Weather provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class Weather {
  
  apiKey='906dfb0122a000e2';
  url;
  constructor(public http: HttpClient) {
    console.log('Hello Weather Provider');
    this.url = 'http://api.wunderground.com/api/'+this.apiKey+'/conditions/q';
  }
  getWeather(city,state){
    return this.http.get(this.url+'/'+state+'/'+city+'.json')
    .map((result: Response)=> result);  
  }
}

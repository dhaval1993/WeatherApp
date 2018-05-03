import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Weather} from '../../providers/weather';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  weather:any;
  weatherObj:any;
   xx:string = 'test';

  location:{
    city:string,
    state: string
  }


  constructor(public navCtrl: NavController,public weatherprovider: Weather) {


  }

  ionViewWillEnter(){
    this.location ={
      city:'Miami',
      state: 'FL'
    }
  
    this.weatherprovider.getWeather(this.location.city,this.location.state)
    .subscribe(
      weather=>{
        this.weather = weather;
       // this.weather = JSON.parse(weather['_body']).current_observation;
        console.log(weather);  
      
         // console.log(weather['_body']);  
        //this.weather = weather.current_observation;
       // this.weatherObj= weather;
      }); 

      
  }
 

 
   
}

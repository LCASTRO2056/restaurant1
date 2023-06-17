import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http'
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public items:any = [];
  public tiempoActual: any;
  public grados: any;
  constructor(public http:HttpClient, public weatherService: WeatherService) {}

  
  leerServicio(){
    let data:Observable<any>;
    
    data = this.http.get("https://mindicador.cl/api");
    data.subscribe(result => {
      
      for(var key in result){

        this.items.push(result[key])
      }

      console.log(this.items)
    })
  }

  getTiempoActual(lat: number, lon: number){
    this.weatherService.tiempoActual(lat, lon).subscribe(data =>{

      this.tiempoActual = data;
      this.grados = (this.tiempoActual.main.temp -273.15).toFixed(1);

    })
  }

  ngOnInit(){
    // this.leerServicio();
    this.getTiempoActual(-33.4377756, -70.6504502);
  }

}

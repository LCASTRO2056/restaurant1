import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const API_KEY = '6f0bc4b8d611c7ddab2347cdb689a7c6';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  tiempoActual(lat: number, lon: number) {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
    return this.http.get(url);
  }
}

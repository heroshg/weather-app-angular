import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiKey = 'e80a94e431f6c8da474f7ee7459288c9';
  //chave da api


  constructor(private http: HttpClient) { }
  // importando o http

  getWeatherDatas(cityName: string): Observable<any> {
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&mode=json&appid=${this.apiKey}`,
     {}
     );
  }
  // método que recebe como parâmetro uma cidade e irá retornar um Observable e por ali faremos um GET na URL da API passando a cidade como parâmetro e a chave da api
}

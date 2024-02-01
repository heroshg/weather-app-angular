import { Component, OnDestroy, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { WeatherDatas } from 'src/app/models/interfaces/weatherDatas.interface';
import { Subject, takeUntil } from 'rxjs';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-weather-home',
  templateUrl: './weather-home.component.html',
  styleUrls: []
})
export class WeatherHomeComponent implements OnInit, OnDestroy {
  private readonly destroy$: Subject<void> = new Subject();
  // um Subject que usaremos para a destruição do componente
  initialCityName = 'São Paulo';
  // Nome Inicial para pesquisa padrão da API
  weatherDatas!: WeatherDatas;
  // criamos uma propriedade que são os dados retornados e inferimos que ele é uma interface WeatherDatas na qual criamos para que sempre retorne dados específicos
  // e também avisamos que essa propriedade é possivelmente nula
  searchIcon = faMagnifyingGlass
  // Ícone de pesquisa

  constructor(private weatherService: WeatherService) {}
// Injetamos o serviço dentro do nosso componente

  ngOnInit(): void {
    this.getWeatherDatas(this.initialCityName);
  }
  // Ao iniciar o nosso componente chamaremos o método para buscar dados do tempo, passando como parâmetro nossa cidade inicial

  getWeatherDatas(cityName: string): void {
    this.weatherService.getWeatherDatas(cityName)
    .pipe(
      takeUntil(this.destroy$)
    )
    .subscribe({
      next: (response) => {
        response && (this.weatherDatas = response);
        console.log(this.weatherDatas);

      },
      error: (error) => console.log(error),
    })
  }
//depois de utilizar a função do service passamos um pipe que é como um cano para em seguida chamar o take e passar o destroy para evitar vazamento de memória
  onSubmit(): void {
    this.getWeatherDatas(this.initialCityName);
    this.initialCityName = '';
  }
  // Ao submeter o formulário irá usar a função de busca e em seguida ficará em branco o campo de busca

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
  // ao ser concluida a requisição ele irá completar e parar a requisição infinita evitando um memory leak
}

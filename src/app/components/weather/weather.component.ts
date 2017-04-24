import { Component, OnInit } from '@angular/core';

import { WeatherDataService } from '../../services/weather-data/weather-data.service';
import { WeatherDataInteface } from '../../interfaces/weather-data.interface';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
  providers: [WeatherDataService]
})
export class WeatherComponent implements OnInit {
  errorMessage: string;
  data: WeatherDataInteface[];
  private weatherData: WeatherDataInteface[];
  constructor(private weatherDataService: WeatherDataService) { }

  getWeatherData(): void {
    this.weatherDataService.getOData().subscribe(
        data => this.data = data,
        error =>  this.errorMessage = <any>error);
  }

  ngOnInit() {
    this.getWeatherData();
  }

}

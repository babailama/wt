import { Component, OnInit } from '@angular/core';

import { WeatherDataService } from '../../services/weather-data/weather-data.service';
import { WeatherData2TableService } from '../../services/weather-data2-table/weather-data2-table.service';
import { WeatherDataInteface } from '../../interfaces/weather-data.interface';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
  providers: [WeatherDataService, WeatherData2TableService]
})
export class WeatherComponent implements OnInit {
  errorMessage: string;
  data: WeatherDataInteface[];
  private weatherData: WeatherDataInteface[];
  constructor(private weatherDataService: WeatherDataService,
              private weatherData2TableService: WeatherData2TableService) { }

  getWeatherData(): void {
    this.weatherDataService.getOData().subscribe(
        data => this.data = data,
        error =>  this.errorMessage = <any>error);
  }

  ngOnInit() {
    this.getWeatherData();
    const a = this.weatherData2TableService.getWeatherTable();
  }

}

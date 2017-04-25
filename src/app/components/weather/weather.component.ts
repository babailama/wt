import { Component, OnInit } from '@angular/core';

import { WeatherDataService } from '../../services/weather-data/weather-data.service';
// import { WeatherData2TableService } from '../../services/weather-data2-table/weather-data2-table.service';
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
  city: string;
  cities= [
       {id: '704147', name: 'Kremenchug'},
       {id: '696643', name: 'Poltava'},
       {id: '703448', name: 'Kiev'},
       {id: '687700', name: 'Zaporizhzhya'}
     ];
  constructor(private weatherDataService: WeatherDataService) { }

  getWeatherData(city): void {
    this.weatherDataService.getOData(city).subscribe(
        data => this.data = data,
        error =>  this.errorMessage = <any>error
      );
  }

  ngOnInit() {
    this.getWeatherData('704147');
  }

}

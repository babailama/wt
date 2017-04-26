import { Component, OnInit, Input } from '@angular/core';

import { WeatherDataService } from '../../services/weather-data/weather-data.service';
import { WeatherDataInteface } from '../../interfaces/weather-data.interface';
import { GmapComponent } from '../gmap/gmap.component';

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
  gmap: GmapComponent;
  @Input() cityName;
  city: string;
  lat: number;
  lng: number;
  cities= [
       /*{id: '704147', name: 'Kremenchug', lat: 49.0458331, lng: 33.4465606},
       {id: '696643', name: 'Poltava', lat: 49.5739374, lng: 34.5505306},
       {id: '703448', name: 'Kiev', lat: 50.4021368, lng: 30.2525137},
       {id: '687700', name: 'Zaporizhzhya', lat: 47.8559028, lng: 35.0352711}*/
       {name: 'Kremenchug', sel: true},
       {name: 'Poltava', sel: false},
       {name: 'Kiev', sel: false},
       {name: 'Zaporizhzhya', sel: false}
     ];
  constructor(private weatherDataService: WeatherDataService) { }

  getWeatherData(city): void {
    this.weatherDataService.getOData(city).subscribe(
        data => this.data = data,
        error =>  this.errorMessage = <any>error
      );
    this.addCity(city);
  }

  ngOnInit() {
    this.getWeatherData('Kremenchug');
  }
  onEnter(value: string): void {
    this.cityName = value;
    this.addCity(this.cityName);
    this.getWeatherData(this.cityName);
  }

  addCity(city: string): number {
    let f = 0;
    for (const a of this.cities) {
      if ( a.name === city ) {
        f = 1;
        a.sel = true;
      } else {
        a.sel = false;
      }
    }
    if ( f === 0) {
      const a = {name: this.cityName, sel: true};
      this.cities.push(a);
    }
    return f;
  }

}


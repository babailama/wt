import { Component, OnInit } from '@angular/core';

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
  city: string;
  lat: number;
  lng: number;
  cities= [
       {id: '704147', name: 'Kremenchug', lat: 49.0458331, lng: 33.4465606},
       {id: '696643', name: 'Poltava', lat: 49.5739374, lng: 34.5505306},
       {id: '703448', name: 'Kiev', lat: 50.4021368, lng: 30.2525137},
       {id: '687700', name: 'Zaporizhzhya', lat: 47.8559028, lng: 35.0352711}
     ];
  constructor(private weatherDataService: WeatherDataService) { }

  getWeatherData(city): void {
    this.weatherDataService.getOData(city).subscribe(
        data => this.data = data,
        error =>  this.errorMessage = <any>error
      );
    for (const i of this.cities) {
      if (i.id == city) {
        this.lat = i.lat;
        this.lng = i.lng;
      }
    } 
    this.gmap.setMap(this.lat, this.lng);
  }

  ngOnInit() {
    this.gmap = new GmapComponent();
    this.getWeatherData('704147');
  }

}


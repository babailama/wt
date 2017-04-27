import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { WeatherDataService } from '../../services/weather-data/weather-data.service';
import { WeatherDataInteface } from '../../interfaces/weather-data.interface';
import { CoordInterface } from '../../interfaces/coord.interface';
import { AllWeatherDataInterface, CityInterface } from '../../interfaces/list.interface';
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
  cityObj: CityInterface;
  @Input() cityName;
  city: string;
  lat: number = 49.0458331;
  lng: number = 33.4465606;
  zoom: number = 7;
  citiesFull: CoordInterface[] = [
       {id: 704147, name: 'Kremenchuk', lat: 49.0458331, lng: 33.4465606, sel: true},
       {id: 696643, name: 'Poltava', lat: 49.5739374, lng: 34.5505306, sel: false},
       {id: 703448, name: 'Kiev', lat: 50.4021368, lng: 30.2525137, sel: false},
       {id: 687700, name: 'Zaporizhzhya', lat: 47.8559028, lng: 35.0352711, sel: false}
       ];
  constructor(private weatherDataService: WeatherDataService) { }
  gotoPlace(lat: number, lng: number, zoom: number) {
      this.zoom = zoom;
      this.lat = lat;
      this.lng = lng;
  }
  getCoordData(event) {
    this.weatherDataService.getCoordData(event.lat, event.lng).subscribe(
        data => {
          this.data = data.list;
          this.cityObj = data.city;
        },
        error =>  {
          this.errorMessage = <any>error;
          console.log('error', error);
        },
        () => {
          this.gotoPlace(this.cityObj.coord.lat, this.cityObj.coord.lon, 7);
          if (!this.findCity(this.cityObj.name)) {
            this.citiesFull.push({id: this.cityObj.id, name: this.cityObj.name, lat: this.cityObj.coord.lat,
              lng: this.cityObj.coord.lon, sel: true});
          }
        }
      );
  }
  getWeatherData(city): void {
    this.weatherDataService.getCityData(city).subscribe(
        data => {
          this.data = data.list;
          this.cityObj = data.city;
        },
        error =>  {
          this.errorMessage = <any>error;
          console.log('error', error);
        },
        () => {
          this.gotoPlace(this.cityObj.coord.lat,this.cityObj.coord.lon, 7);
          if (!this.findCity(this.cityObj.name)) {
            this.citiesFull.push({id: this.cityObj.id, name: this.cityObj.name,
              lat: this.cityObj.coord.lat, lng: this.cityObj.coord.lon, sel: true});
          }
        }
      );
  }
  ngOnInit() {
    this.getWeatherData('Kremenchuk');
  }
  onEnter(value: string): void {
    this.cityName = value;
    this.getWeatherData(this.cityName);
    this.gotoPlace(this.cityObj.coord.lat, this.cityObj.coord.lon, 7);
    }

  findCity(city: string): boolean {
    for (const a of this.citiesFull) {
      if ( a.name === city ) {
        return true;
      }
    }
    return false;
  }
}



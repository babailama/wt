/**
 * New typescript file
 */

import { CloudsInerface } from './clouds.interface';
import { MainInerface } from './main.interface';
import { RainInerface } from './rain.interface';
import { SnowInerface } from './snow.interface';
import { WeatherInerface } from './weather.interface';
import { WindInerface } from './wind.interface';

export interface ListInterface {
  dt: number;
  main: MainInerface;
  weather: WeatherInerface[];
  clouds: CloudsInerface;
  wind: WindInerface;
  rain: RainInerface;
  snow: SnowInerface;
  dt_txt: string;
}

export interface CityInterface {
      coord: {lat: number, lon: number};
      country: string;
      id: number;
      name: string;
}


export interface AllWeatherDataInterface {
   city: CityInterface;
   list: ListInterface[];
}

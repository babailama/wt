import { $ } from 'protractor';
/**
 * New typescript file
 */
import { CloudsInerface } from './clouds.interface';
import { MainInerface } from './main.interface';
import { RainInerface } from './rain.interface';
import { SnowInerface } from './snow.interface';
import { WeatherInerface } from './weather.interface';
import { WindInerface } from './wind.interface';

export interface WeatherDataInteface {
  dt: number;
  main: MainInerface;
  weather: WeatherInerface[];
  clouds: CloudsInerface;
  wind: WindInerface;
  rain: RainInerface;
  snow: SnowInerface;
  dt_txt: string;
}


/**
 * New typescript file
 */
export interface WeatherTableInterface {
  dateString: Array<string>;
  timeString: Array<string>;
  temp: Array<number>;
  tempMin: Array<number>;
  tempMax: Array<number>;
  pressure: Array<number>;
  humidity: Array<number>;
  wheatherId: Array<number>;
  wheatherMain: Array<string>;
  wheatherDescription: Array<string>;
  wheatherIconId: Array<number>;
  cloudsAll: Array<number>;
  windSpeed: Array<number>;
  windDeg: Array<number>;
  rain: Array<number>;
  snow: Array<number>;
}

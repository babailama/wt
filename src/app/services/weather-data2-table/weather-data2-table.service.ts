import { Injectable } from '@angular/core';

import { WeatherDataService } from '../../services/weather-data/weather-data.service';
import { WeatherDataInteface } from '../../interfaces/weather-data.interface';
import { WeatherTableInterface } from '../../interfaces/weather-table.interface';

@Injectable()
export class WeatherData2TableService {
  errorMessage: string;
  data: WeatherDataInteface[];
  table: WeatherTableInterface;
  dateString: string[];
  constructor(private weatherDataService: WeatherDataService) {
     this.dateString = [];
  }
  addItem(item: WeatherDataInteface) {
    const t = new Date;
    t.setMilliseconds(item.dt);
    this.dateString.push(t.toTimeString());
    console.log(this.dateString);
    this.table.dateString.push(t.toTimeString());
    this.table.timeString.push(t.toTimeString());
    console.log(this.dateString);
    console.log(this.table.timeString);
  }
  populateTable() {
    for (const item of this.data) {
      this.addItem(item);
    }
  }

}

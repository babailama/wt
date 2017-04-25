import { Component } from '@angular/core';

import { WeatherComponent } from './components/weather/weather.component';
import { GmapComponent } from './components/gmap/gmap.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Weather from';
  openweathermapLabel = 'openweathermap.org';
  openweathermapUrl = 'http://openweathermap.org';
}

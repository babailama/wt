import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {ToolTipModule} from 'angular2-tooltip'
import { AgmCoreModule } from 'angular2-google-maps/core';

import { AppComponent } from './app.component';
import { WeatherComponent } from './components/weather/weather.component';
import { GmapComponent } from './components/gmap/gmap.component';


@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    GmapComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ToolTipModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyByUr5ECQty0nZcvA6xhSBM1Q0kyBt0cUQ'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

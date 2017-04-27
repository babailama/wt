import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


import { WeatherDataInteface } from '../../interfaces/weather-data.interface';
import { AllWeatherDataInterface } from '../../interfaces/list.interface';
@Injectable()
export class WeatherDataService {
  private part1Url: string = 'http://api.openweathermap.org/data/2.5/forecast?';
  private part2Url: string = '&units=metric&lang=ua&appid=baa60cc7d33e8acf323299e46cc18a7a';
//  private dataUrl: string;
  //  'http://api.openweathermap.org/data/2.5/forecast?id=704147&units=metric&lang=ua&appid=baa60cc7d33e8acf323299e46cc18a7a';
  constructor(private http: Http) { }
  
  getCoordData(lat: number, lng: number) :  Observable<AllWeatherDataInterface> {
    const dataUrl=this.part1Url+'lat='+lat+'&lon='+lng+this.part2Url;
    return this.getOData(dataUrl);
  }

  getCityData(city: string) :  Observable<AllWeatherDataInterface> {
    const dataUrl=this.part1Url+'q='+city+this.part2Url;
    return this.getOData(dataUrl);
  }

  getOData(url : string):  Observable<AllWeatherDataInterface> {
    return this.http.get(url)
                    .map(this.extractData)
                    .catch(this.handleError);
  }
  private extractData(res: Response) {
    const body = res.json();
    for (const item of body.list) {
      item.dt = item.dt * 1000;
    }
    return {city: body.city, list:body.list} || { };
  }
  private handleError (error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}

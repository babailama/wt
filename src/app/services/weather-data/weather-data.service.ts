import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


import { WeatherDataInteface } from '../../interfaces/weather-data.interface';
@Injectable()
export class WeatherDataService {
  private dataUrl = 'http://api.openweathermap.org/data/2.5/forecast?id=704147&lang=ua&appid=baa60cc7d33e8acf323299e46cc18a7a';
  constructor(private http: Http) { }

  getOData():  Observable<WeatherDataInteface[]> {
    return this.http.get(this.dataUrl)
                    .map(this.extractData)
                    .catch(this.handleError);
  }
  private extractData(res: Response) {
    const body = res.json();
    return body.list || { };
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

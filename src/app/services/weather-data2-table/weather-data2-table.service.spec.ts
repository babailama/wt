import { TestBed, inject } from '@angular/core/testing';

import { WeatherData2TableService } from './weather-data2-table.service';

describe('WeatherData2TableService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WeatherData2TableService]
    });
  });

  it('should ...', inject([WeatherData2TableService], (service: WeatherData2TableService) => {
    expect(service).toBeTruthy();
  }));
});

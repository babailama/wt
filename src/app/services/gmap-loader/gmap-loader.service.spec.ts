import { TestBed, inject } from '@angular/core/testing';

import { GmapLoaderService } from './gmap-loader.service';

describe('GmapLoaderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GmapLoaderService]
    });
  });

  it('should ...', inject([GmapLoaderService], (service: GmapLoaderService) => {
    expect(service).toBeTruthy();
  }));
});

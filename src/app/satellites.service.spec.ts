/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SatelliteService } from './satellite.service';

describe('Service: Satelites', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SatelliteService]
    });
  });

  it('should ...', inject([SatelliteService], (service: SatelliteService) => {
    expect(service).toBeTruthy();
  }));
});

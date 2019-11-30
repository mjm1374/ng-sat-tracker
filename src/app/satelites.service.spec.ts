/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SatelitesService } from './satelites.service';

describe('Service: Satelites', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SatelitesService]
    });
  });

  it('should ...', inject([SatelitesService], (service: SatelitesService) => {
    expect(service).toBeTruthy();
  }));
});

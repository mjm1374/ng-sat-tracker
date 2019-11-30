/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SateliteService } from './satelite.service';

describe('Service: Satelites', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SateliteService]
    });
  });

  it('should ...', inject([SateliteService], (service: SateliteService) => {
    expect(service).toBeTruthy();
  }));
});

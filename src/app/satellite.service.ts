import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SatelliteService {
  satellites = [];

  constructor(
    private http: HttpClient
  ) { }

  addToSatellites(sat) {
    console.log(sat);
    this.satellites.push(
      {
        lat: sat.coords.lat,
        lng: sat.coords.lng,
        draggable: true
      }
    );
  }

  lookUpSatellites(position: position, radius: number) {
    console.log('lookUp: ', position, radius);
    return null;
  }

  getSatellites() {
    console.log('getSatellites');
    return this.satellites;
  }

  clearSatellites() {
    this.satellites = [];
    return this.satellites;
  }

  // getShippingPrices() {
  //   return this.http.get('/assets/shipping.json');
  // }
}

interface position {
  lat: number;
  lng: number;
}

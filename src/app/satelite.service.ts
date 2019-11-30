import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SateliteService {
  satelites = [];

  constructor(
    private http: HttpClient
  ) { }

  addToSatelites(sat) {
    console.log(sat);
    this.satelites.push(
      {
        lat: sat.coords.lat,
        lng: sat.coords.lng,
        draggable: true
      }
    );
  }

  lookUpSatelites(position: position, radius: number) {
    console.log('lookUp: ', position, radius);
    return null;
  }

  getSatelites() {
    return this.satelites;
  }

  clearSatelites() {
    this.satelites = [];
    return this.satelites;
  }

  // getShippingPrices() {
  //   return this.http.get('/assets/shipping.json');
  // }
}

interface position {
  lat: number;
  lng: number;
}

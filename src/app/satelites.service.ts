import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SatelitesService {
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
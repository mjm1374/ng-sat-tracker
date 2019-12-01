import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  lat: number = 40.654597;
  lng: number = -74.061342;
  radius: number = 50000;
  markers;

  getPosition() {
    return { lat: this.lat, lng: this.lng, radius: this.radius };
  }

  setPosition(position) {
    this.lat = position.lat;
    this.lng = position.lng;
    this.radius = position.radius;
  }

  getMarkers() {
    return this.markers;
  }

  setMarkers(markers) {
    this.markers = markers;
  }

  constructor(
    private http: HttpClient
  ) { }

}

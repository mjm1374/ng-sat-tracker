import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  @Output() updatePos: EventEmitter<object> = new EventEmitter();

  lat: number = 40.654597;
  lng: number = -74.061342;
  radius: number = 50000;
  markers = [];

  emitUpdatePos() {
    let tempPos = { lat: this.lat, lng: this.lng, radius: this.radius }
    this.updatePos.emit(tempPos);

  }

  getPosition() {
    return { lat: this.lat, lng: this.lng, radius: this.radius };
  }

  setPosition(position, triggerEmit = false) {
    this.lat = position.lat;
    this.lng = position.lng;
    this.radius = position.radius;
    if(triggerEmit) this.emitUpdatePos();
  }

  getMarkers() {
    return this.markers; 
  }

  

  addToMarkers(markers) {
    markers.forEach(sat => {
      if (!this.markers.some(e => e.satid === sat.satid)) {
        let tempDate = new Date(sat.launchDate);
        let formatted_date = tempDate.getMonth() + "-" + (tempDate.getDate() + 1) + "-" + tempDate.getFullYear();
        sat.launchDate = formatted_date; 
        this.markers.push(sat)
      }
    });
  }
  setMarkers(markers) {
    this.clearMarkers();
    this.addToMarkers(markers);
  }

  clearMarkers() {
    this.markers = [];
  }

  constructor(
    private http: HttpClient
  ) { }

}

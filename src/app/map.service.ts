import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {marker, satellite, position} from './interfaces'

@Injectable({
  providedIn: 'root'
})
export class MapService {

  @Output() updatePos: EventEmitter<object> = new EventEmitter();

  lat: number = 40.654597;
  lng: number = -74.061342;
  radius: number = 50000;
  satellites: satellite[];

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
    return this.satellites; 
  }

  

  addToMarkers(satellites) {
    if(satellites != undefined && satellites.length > 3){
      satellites.forEach(sat => {
        if (!this.satellites.some(e => e.satid === sat.satid)) {
          let tempDate = new Date(sat.launchDate);
          let formatted_date = tempDate.getMonth() + "-" + (tempDate.getDate() + 1) + "-" + tempDate.getFullYear();
          sat.launchDate = formatted_date; 
          this.satellites.push(sat)
        }
      });
    }else{
      this.clearMarkers();
    }
  }
  setMarkers(satellites) {
    this.clearMarkers();
    this.addToMarkers(satellites);
  }

  clearMarkers() {
    this.satellites = [];
  }

  constructor(
    private http: HttpClient
  ) { }

}

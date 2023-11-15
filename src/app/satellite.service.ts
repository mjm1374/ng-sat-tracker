import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MapService } from './map.service';
import  {Apikey} from './apikey'; 
import {marker, satellite, position} from './interfaces'

@Injectable({
  providedIn: 'root'
})

export class SatelliteService {
  //static N2YO_API = Apikey.N2YO_API; 
  static N2YO_API = "6MVMLK-EJ3FXU-BTVB3F-3TNQ";
  static N2YO_SATURL = "https://api.n2yo.com/rest/v1/satellite/";
  static PHP_API = "https://logikbox.com/api/";
  static DEV_API ="http://ng-php-api:8888/";

  satellites: position[];
  newSatellites: number = 0;
  categoryId: number;

  @Output() updateSats: EventEmitter<number> = new EventEmitter();

  constructor(
    private http: HttpClient,
    private mapService: MapService
  ) { }

  addToSatellites(sat) {
    this.satellites.push(
      {
        lat: sat.coords.lat,
        lng: sat.coords.lng,
        draggable: true
      }
    );
  }

  getCurrentCat(){
    return this.categoryId;
  }

  lookUpSatellites(position: position, radius: number) {
    return null;
  }
  getSatellites() {
    return this.satellites;
  }
  //Request: /above/{observer_lat}/{observer_lng}/{observer_alt}/{search_radius}/{category_id}
  getSatellitesByCat(categoryId?) {
    if (categoryId) this.categoryId = categoryId;
    let mapPosition = this.mapService.getPosition();
    let getString = `${SatelliteService.PHP_API}above.php?lat=${mapPosition.lat}&lng=${mapPosition.lng}&alt=0&rad=120&cat=${this.categoryId}`;
    console.log(getString);
    this.newSatellites = this.categoryId;
    return this.http.get(getString);
  }

  emitUpdateSats() {
    this.updateSats.emit(this.newSatellites);
    this.newSatellites = 0;
  }

  clearSatellites() {
    this.satellites = [];
    return this.satellites;
  }
}
import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MapService } from './map.service';
import {marker, satellite, position} from './interfaces'

@Injectable({
  providedIn: 'root'
})

export class SatelliteService {
  static N2YO_API = "6MVMLK-EJ3FXU-BTVB3F-3TNQ";
  static N2YO_SATURL = "https://www.n2yo.com/rest/v1/satellite/";
  satellites: position[];
  newSatellites = 0;
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
    let getString = `${SatelliteService.N2YO_SATURL}above/${mapPosition.lat}/${mapPosition.lng}/0/90/${this.categoryId}&apiKey=${SatelliteService.N2YO_API}`;
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

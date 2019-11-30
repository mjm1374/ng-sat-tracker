import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MapService } from './map.service';
import { filter, map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class SatelliteService {
  static N2YO_API = "6MVMLK-EJ3FXU-BTVB3F-3TNQ";
  static N2YO_SATURL = "https://www.n2yo.com/rest/v1/satellite/";
  satellites = [];

  constructor(
    private http: HttpClient,
    private mapService: MapService
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
  //Request: /above/{observer_lat}/{observer_lng}/{observer_alt}/{search_radius}/{category_id}
  getSatellitesByCat(categoryId?) {
    let mapPosition = this.mapService.getPosition();
    let getString = `${SatelliteService.N2YO_SATURL}above/${mapPosition.lat}/${mapPosition.lng}/0/${(mapPosition.radius / 1000)}/${categoryId}&apiKey=${SatelliteService.N2YO_API}`;
    return this.http.get(getString);
  }

  clearSatellites() {
    this.satellites = [];
    return this.satellites;
  }
}

interface position {
  lat: number;
  lng: number;
}

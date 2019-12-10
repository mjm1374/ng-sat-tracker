import { Component, OnInit, HostBinding, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MouseEvent, LatLngLiteral } from '@agm/core'; // google maps
import { fromEvent, Subject } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';

import { SatelliteService } from '../satellite.service';
import { MapService } from '../map.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  // default values
  zoom: number = 5;
  radius: number = 5;
  newCenterLat: number;
  newCenterLng: number;
  tempSatList;
  satellites;
  markers: marker[];
  map;


  // initial center position for the map
  lat: number = 40.654597;
  lng: number = -74.061342;
  //event listener
  newSatellites = false;

  constructor(
    private route: ActivatedRoute,
    private satelliteService: SatelliteService,
    private mapService: MapService
  ) { }

  ngOnInit() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
        this.radius = this.radius;
        this.setPosition({ lat: this.lat, lng: this.lng, radius: this.radius });
      }, this.showError);
    } else {
      throw ("Geolocation is not supported by this browser."); //TODO - print to screen
    }

    this.satelliteService.updateSats.subscribe(newSatellites => {
      this.newSatellites = newSatellites;
      this.markers = this.mapService.getMarkers();
    });

    this.mapService.updatePos.subscribe((res) => {
      this.lat = res.lat;
      this.lng = res.lng;
    });
  }

  setPosition(position) {
    this.mapService.setPosition(position)
  }

  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }

  mapClicked($event: MouseEvent) {
    //this.satelliteService.addToSatellites($event);
    console.log(this.satelliteService.getSatellites());
  }

  mapCenterChange($event) {
    this.newCenterLat = $event.lat;
    this.newCenterLng = $event.lng;
  }

  mapReady(map) {
    this.map = map;
    this.map.addListener("dragend", () => {
      this.lat = this.newCenterLat;
      this.lng = this.newCenterLng;
      this.setPosition({ lat: this.lat, lng: this.lng, radius: this.radius });

      this.satelliteService.getSatellitesByCat().subscribe((res) => {
        this.tempSatList = res
        this.satellites = this.tempSatList.above;
        this.mapService.addToMarkers(this.tempSatList.above);
        this.satelliteService.emitUpdateSats();

      });
      this.markers = this.mapService.getMarkers();
    });
  }

  markerDragEnd(m: marker, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
  }

  updateRadius($event) {
    this.radius = $event;
    this.setPosition({ lat: this.lat, lng: this.lng, radius: this.radius });
  }

  updateMarkers() {
    console.log('updateMarkers');
  }

  showError(error) {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        console.log("User denied the request for Geolocation.");
        break;
      case error.POSITION_UNAVAILABLE:
        console.log("Location information is unavailable.");
        break;
      case error.TIMEOUT:
        console.log("The request to get user location timed out.");
        break;
      case error.UNKNOWN_ERROR:
        console.log("An unknown error occurred.");
        break;
    }
  }

}

// just an interface for type safety.
interface marker {
  satlat: number;
  satlng: number;
  satname?: string;
  draggable: boolean;
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MouseEvent, LatLngLiteral } from '@agm/core'; // google maps
import { fromEvent, Subject } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';

import { SateliteService } from '../satelite.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  // default values
  zoom: number = 8;
  radius: number = 95000;
  newCenterLat: number;
  newCenterLng: number;

  // initial center position for the map
  lat: number = 40.654597;
  lng: number = -74.061342;

  constructor(
    private route: ActivatedRoute,
    private sateliteService: SateliteService
  ) { }

  ngOnInit() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
        this.radius = this.radius;
      }, this.showError);
    } else {
      throw ("Geolocation is not supported by this browser."); //TODO - print to screen
    }
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

  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }

  mapClicked($event: MouseEvent) {
    this.sateliteService.addToSatelites($event);
    // this.markers.push({
    //   lat: $event.coords.lat,
    //   lng: $event.coords.lng,
    //   draggable: true
    // });
    console.log(this.sateliteService.getSatelites());
  }

  mapCenterChange($event) {
    this.newCenterLat = $event.lat;
    this.newCenterLng = $event.lng;
  }

  mapReady(map) {
    map.addListener("dragend", () => {
      this.lat = this.newCenterLat;
      this.lng = this.newCenterLng;
      this.sateliteService.lookUpSatelites({ lat: this.newCenterLat, lng: this.newCenterLng }, this.radius)
      console.log('dragmapend', this.newCenterLat, this.newCenterLng)
    });
  }

  markerDragEnd(m: marker, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
  }

  updateRadius($event) {
    console.log('updateRadius', $event);
    this.radius = $event;
  }

  markers: marker[] = [
    {
      lat: 40.504402,
      lng: -75.764910,
      label: 'Allentown',
      draggable: true
    },
    {
      lat: 39.409672,
      lng: -74.522566,
      label: 'Sea Isle',
      draggable: false
    },
    {
      lat: 41.433461,
      lng: -75.620719,
      label: 'Scranton',
      draggable: true
    }
  ]
}

// just an interface for type safety.
interface marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
}

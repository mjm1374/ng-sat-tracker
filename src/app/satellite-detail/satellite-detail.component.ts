import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SatelliteService } from '../satellite.service';
import { MapService } from '../map.service';
import {marker, satellite, position} from '../interfaces'

@Component({
  selector: 'app-satellite-detail',
  templateUrl: './satellite-detail.component.html',
  styleUrls: ['./satellite-detail.component.css']
})
export class SatelliteDetailComponent implements OnInit {
  satellite: satellite;
  markers: any[];

  constructor(
    private route: ActivatedRoute,
    private satelliteService: SatelliteService,
    private mapService: MapService
  ) { }

  ngOnInit() {
    this.markers= this.mapService.getMarkers();
    this.route.paramMap.subscribe(params => {
      this.satellite = this.markers.find(sat => sat.satid == parseInt(params.get('satelliteId')));
      this.mapService.setPosition({lat: this.satellite.satlat, lng: this.satellite.satlng, radius: 50000 }, true)
    });

  }
}

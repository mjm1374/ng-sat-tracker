import { Component, OnInit } from '@angular/core';
import { SatelliteService } from '../satellite.service';
@Component({
  selector: 'app-satellite-list',
  templateUrl: './satellite-list.component.html',
  styleUrls: ['./satellite-list.component.css']
})
export class SatelliteListComponent implements OnInit {
  satellites;

  constructor(
    private satelliteService: SatelliteService
  ) { }

  ngOnInit() {
    this.satellites = this.satelliteService.getSatellites();
  }

}

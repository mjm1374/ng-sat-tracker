import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { categories } from '../categories';
import { SatelliteService } from '../satellite.service';
import { MapService } from '../map.service';
import { filter, map } from 'rxjs/operators';
@Component({
  selector: 'app-satellite-list',
  templateUrl: './satellite-list.component.html',
  styleUrls: ['./satellite-list.component.css']
})
export class SatelliteListComponent implements OnInit {
  satellites;
  category;
  tempSatList;

  constructor(
    private route: ActivatedRoute,
    private satelliteService: SatelliteService,
    private mapService: MapService
  ) { }

  ngOnInit() {

    this.route.paramMap.subscribe(params => {
      this.category = categories.find(cat => cat.id == parseInt(params.get('categoryId')))
    });

    this.getSatellites(this.category.id);
  }

  getSatellites(categoryId) {
    this.satelliteService.getSatellitesByCat(categoryId).subscribe((res) => {
      this.tempSatList = res
      this.satellites = this.tempSatList.above;
      this.mapService.setMarkers(this.tempSatList.above);
      console.log("xxx", categoryId, this.tempSatList.above);
      this.satelliteService.emitUpdateSats();

    });
  }

}

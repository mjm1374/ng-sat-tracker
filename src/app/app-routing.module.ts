import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { MainMenuComponent } from "./main-menu/main-menu.component";
import { SatelliteListComponent } from "./satellite-list/satellite-list.component";
import { SatelliteDetailComponent } from "./satellite-detail/satellite-detail.component";

const routes: Routes = [
  { path: "", component: MainMenuComponent },
  { path: "satellites", component: SatelliteListComponent },
  { path: 'satellites/:categoryId', component: SatelliteListComponent },
  { path: 'satellite/:satelliteId', component: SatelliteDetailComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

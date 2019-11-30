import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { MainMenuComponent } from "./main-menu/main-menu.component";
import { SatelliteListComponent } from "./satellite-list/satellite-list.component";

const routes: Routes = [
  { path: "", component: MainMenuComponent },
  { path: "satellites", component: SatelliteListComponent },
  { path: 'satellites/:categoryId', component: SatelliteListComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

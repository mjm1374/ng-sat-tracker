import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { MainMenuComponent } from "./main-menu/main-menu.component";
import { SateliteListComponent } from "./satelite-list/satelite-list.component";

const routes: Routes = [
  { path: "", component: MainMenuComponent },
  { path: "satelites/", component: SateliteListComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

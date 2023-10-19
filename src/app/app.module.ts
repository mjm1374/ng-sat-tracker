import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { TopBarComponent } from "./top-bar/top-bar.component";
import { SatelliteListComponent } from "./satellite-list/satellite-list.component";
import { MainMenuComponent } from "./main-menu/main-menu.component";
import { MapComponent } from "./map/map.component";
import { AgmCoreModule } from "@agm/core"; //google maps
import { SatelliteDetailComponent } from './satellite-detail/satellite-detail.component';
@NgModule({
   declarations: [
      AppComponent,
      TopBarComponent,
      SatelliteListComponent,
      MainMenuComponent,
      MapComponent,
      SatelliteDetailComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      ReactiveFormsModule,
      HttpClientModule,
      AgmCoreModule.forRoot({
         apiKey: "AIzaSyBtk6iKOhq8lLL-pk4JlGF3vQhVr4wFOxI"
      })
   ],
   providers: [MapComponent],
   bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { TopBarComponent } from "./top-bar/top-bar.component";
import { SateliteListComponent } from "./satelite-list/satelite-list.component";
import { MainMenuComponent } from "./main-menu/main-menu.component";
import { MapComponent } from "./map/map.component";
import { AgmCoreModule } from "@agm/core"; //google maps
@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    SateliteListComponent,
    MainMenuComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyAnJkzn_D_jeEWtfJTgXHpYvhUpD7XK_8k"
    })
  ],
  providers: [MapComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

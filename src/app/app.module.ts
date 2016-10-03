import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// angular-google-maps
import { AgmCoreModule } from 'angular2-google-maps/core'; 

import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAg1oQGUsCuZ36N_X9VWnX5Rt9lsSqVvgA'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

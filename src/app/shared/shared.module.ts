import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './components/map/map.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouteMapComponent } from './components/route-map/route-map.component';
import { NotificationComponent } from './components/notification/notification.component';
import { LoaderComponent } from './components/loader/loader.component';
import { NearstopsComponent } from './components/nearstops/nearstops.component';




@NgModule({
  declarations: [
    MapComponent,
    FooterComponent,
    RouteMapComponent,
    NotificationComponent,
    LoaderComponent,
    NearstopsComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MapComponent,
    FooterComponent,
    RouteMapComponent,
    NotificationComponent,
    LoaderComponent,
    MapComponent,
     NearstopsComponent

  ]
})
export class SharedModule { }

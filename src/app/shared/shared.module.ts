import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './components/map/map.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouteMapComponent } from './components/route-map/route-map.component';
import { NotificationComponent } from './components/notification/notification.component';
import { LoaderComponent } from './components/loader/loader.component';




@NgModule({
  declarations: [
    MapComponent,
    FooterComponent,
    RouteMapComponent,
    NotificationComponent,
    LoaderComponent,
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
    MapComponent

  ]
})
export class SharedModule { }

import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { ClientRoutingModule } from './client-routing.module';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { RouteComponent } from './route/route.component';
import { BusesComponent } from './buses/buses.component';
import { ReportComponent } from './report/report.component';


@NgModule({
  declarations: [
    HomeComponent,
    SearchComponent,
    RouteComponent,
    BusesComponent,
    ReportComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    SharedModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class ClientModule { }

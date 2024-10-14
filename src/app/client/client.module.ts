import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { ClientRoutingModule } from './client-routing.module';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';


@NgModule({
  declarations: [
    HomeComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    SharedModule,
    FormsModule,
    RouterModule,
  ]
})
export class ClientModule { }

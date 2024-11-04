import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ClientComponent } from './client.component';
import { SearchComponent } from './search/search.component';
import { RouteComponent } from './route/route.component';
import { BusesComponent } from './buses/buses.component';
import { ReportComponent } from './report/report.component';

const routes: Routes = [
  {
    path: '',
    component: ClientComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'search',
        component: SearchComponent
      },
      {
        path: 'route',
        component: RouteComponent
      },
      {
        path: 'buses',
        component: BusesComponent
      },
      {
        path: 'report',
        component: ReportComponent
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }

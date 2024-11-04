import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { RouteMapService } from 'src/app/shared/services/map/route-map.service';
import { RouteDataService } from 'src/app/shared/services/route-data/route-data.service';


@Component({
  selector: 'app-route',
  templateUrl: './route.component.html',
  styleUrls: ['./route.component.css']
})
export class RouteComponent implements OnInit {

  routeInstructions: string[] = [];
  journeyDuration: string = '';
  // location$!: Observable<RouteMap[]>;


  from: string = '';
  to: string = '';
  arrivalTime: string = '';
  dropOffTime: string = '';
  duration: string = '';

  constructor(private route: ActivatedRoute, private routeDataService: RouteDataService, private rm: RouteMapService) { }


  ngOnInit(): void {

    // Subscribe to queryParams to get the data
    this.route.queryParams.subscribe(params => {
      this.from = params['from'];
      this.to = params['to'];
      this.arrivalTime = params['arrivalTime'];
      this.dropOffTime = params['dropOffTime'];
      this.duration = params['duration'];

      console.log('Params: ',params);

    });




    this.routeDataService.routeInstructions$.subscribe(instructions => {
      this.routeInstructions = instructions;
    });

    this.routeDataService.journeyDuration$.subscribe(duration => {
      this.journeyDuration = duration;
    });

    // this.location$ = this.rm.getLocation()
  }

}

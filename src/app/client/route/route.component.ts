import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { BusesService } from 'src/app/shared/services/bus/buses.service';
import { RouteMapService } from 'src/app/shared/services/map/route-map.service';
import { RouteDataService } from 'src/app/shared/services/route-data/route-data.service';


@Component({
  selector: 'app-route',
  templateUrl: './route.component.html',
  styleUrls: ['./route.component.css']
})
export class RouteComponent implements OnInit {

  busesToDestination: any[] = []; // Array to store buses allocated to 'to' location

  routeInstructions: string[] = [];
  journeyDuration: string = '';
  // location$!: Observable<RouteMap[]>;


  stops: string[] = [];
  fromLocation: any; // example start location
  toLocation: any;   // example end location
  isShortRoute = true; // Toggle for short or long route

  from: string = '';
  to: string = '';
  arrivalTime: string = '';
  dropOffTime: string = '';
  duration: string = '';
  hasQueryParams: boolean = false;
  hasNoQueryParams: boolean = true;

  constructor(private route: ActivatedRoute, private routeDataService: RouteDataService, private rm: RouteMapService, private bs: BusesService) { }


  ngOnInit(): void {

    this.getStops();

    // Subscribe to queryParams to get the data
    this.route.queryParams.subscribe(params => {
      this.from = params['from'];
      this.to = params['to'];
      this.arrivalTime = params['arrivalTime'];
      this.dropOffTime = params['dropOffTime'];
      this.duration = params['duration'];

      // Update `fromLocation` and `toLocation` based on query parameters
    this.fromLocation = this.from ; // Fallback if 'from' is not provided
    this.toLocation = this.to; // Fallback if 'to' is not provided

      if (this.to) {
        this.busesToDestination = this.bs.getBusesByDestination(this.to);
      }

        // Check if there are any query parameters
        this.hasQueryParams = !!(this.from || this.to || this.arrivalTime || this.dropOffTime || this.duration);

        console.log('Params:', params);

      // console.log('Params: ',params);

    });




    this.routeDataService.routeInstructions$.subscribe(instructions => {
      this.routeInstructions = instructions;
    });

    this.routeDataService.journeyDuration$.subscribe(duration => {
      this.journeyDuration = duration;
    });

    // this.location$ = this.rm.getLocation()
  }

  getStops(): void {
    this.rm.getStopsBetweenLocations(this.fromLocation, this.toLocation, this.isShortRoute)
      .subscribe((stops: string[]) => {
        this.stops = stops;
      });
  }
getLongRoute() {
  this.isShortRoute = false;
  this.rm.getStopsBetweenLocations(this.from, this.to, false).subscribe(
    (stops: string[]) => {
      this.stops = stops;
    },
    (error) => {
      console.error("Error fetching long route stops:", error);
    }
  );
}

getShortRoute() {
  this.isShortRoute = true;
  this.rm.getStopsBetweenLocations(this.from, this.to, true).subscribe(
    (stops: string[]) => {
      this.stops = stops;
    },
    (error) => {
      console.error("Error fetching short route stops:", error);
    }
  );
}

}

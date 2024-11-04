import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouteMapService } from '../../services/map/route-map.service';
import { ActivatedRoute } from '@angular/router';
import { RouteDataService } from '../../services/route-data/route-data.service';

// Declare L as a global variable
declare const L: any;

@Component({
  selector: 'app-route-map',
  templateUrl: './route-map.component.html',
  styleUrls: ['./route-map.component.css']
})
export class RouteMapComponent implements OnInit, OnDestroy {
  searchTerm: string = '';
  from: string = '';
  to: string = '';
  arrivalTime: string = '';
  dropOffTime: string = '';
  duration: string = '';

  public map: any; // Holds the map instance

  constructor(
    private rm: RouteMapService,
    private route: ActivatedRoute,
    private routeDataService: RouteDataService
  ) {}

  ngOnInit(): void {
    // Initialize the map with a default location, e.g., Festac Town coordinates
    if (!this.map) {
      this.map = L.map('map').setView([6.465422, 3.406448], 13); // Coordinates for Lagos, Nigeria

      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      }).addTo(this.map);
    }

    // Subscribe to queryParams to get the data
    this.route.queryParams.subscribe(params => {
      this.from = params['from'];
      this.to = params['to'];

      // If from and to parameters are provided, update the map with route data
      if (this.from && this.to) {
        const fromCoordinates = this.rm.getLatLngByName(this.from);
        const toCoordinates = this.rm.getLatLngByName(this.to);

        // Update map view to the 'from' location
        this.map.setView(fromCoordinates, 15);

        const routeControl = L.Routing.control({
          waypoints: [
            L.latLng(fromCoordinates?.lat, fromCoordinates?.lng),
            L.latLng(toCoordinates?.lat, toCoordinates?.lng)
          ],
          routeWhileDragging: false,
          show: false
        }).addTo(this.map);

        // Extract route instructions and duration when the route is found
        routeControl.on('routesfound', (e: any) => {
          const routes = e.routes[0];

          // Calculate the journey duration in minutes
          const durationInMinutes = Math.round(routes.summary.totalTime / 60);
          const durationString = `${durationInMinutes} minutes`;

          // Extract route instructions
          const instructions = routes.instructions.map((instruction: any) => instruction.text);

          // Send data to the service
          this.routeDataService.setRouteInstructions(instructions);
          this.routeDataService.setJourneyDuration(durationString);
        });

        // Add a marker or circle to the 'from' location
        L.circle(fromCoordinates, {
          color: 'green',
          fillColor: 'rgb(75, 198, 75)',
          fillOpacity: 0.5,
          radius: 50
        }).addTo(this.map);
      }
    });
  }

  ngOnDestroy(): void {
    // Destroy the map instance if it exists when the component is destroyed
    if (this.map) {
      this.map.remove();
      this.map = null; // Reset the map instance
    }
  }
}

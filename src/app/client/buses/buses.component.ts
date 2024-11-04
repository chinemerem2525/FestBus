import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Bus, BusesService } from 'src/app/shared/services/bus/buses.service';
// Import Router and ActivatedRoute services


@Component({
  selector: 'app-buses',
  templateUrl: './buses.component.html',
  styleUrls: ['./buses.component.css']
})
export class BusesComponent implements OnInit {

  searchResults: Bus[] = []; // Array to store search results

  constructor(private buses: BusesService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {

  }


  searchBus(event: any): void {
    const busNumber = +event.target.value; // Get the bus number from input and convert it to a number
    if (!isNaN(busNumber)) {
      // Call the service method to get the bus stops for the input bus number
      this.searchResults = this.buses.getBusStopsByNumber(busNumber);
    }
  }

}

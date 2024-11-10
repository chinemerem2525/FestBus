import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BusStopService } from 'src/app/shared/services/bus/bus-stop.service';
import { LoaderService } from 'src/app/shared/services/loader/loader.service';

// declaring L to be accessable as a global javascript variable
declare const L: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  searchTerm: string = '';

  constructor(private router: Router, private _bs: BusStopService, private ls: LoaderService) { }

  ngOnInit(): void {
    if (!navigator.geolocation){
      console.log('location is no supported');
    }
    navigator.geolocation.getCurrentPosition((position) => {
      const coords = position.coords;
      const latLong = [coords.latitude, coords.longitude];


      console.log(
        `lat: ${position.coords.latitude}, lon: ${position.coords.longitude}`
      );
      // initialize the leafletjs map
      let mymap = L.map('map').setView(latLong, 16);
      // map layer
      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(mymap);

    // adding a pointer to specify the location of my user
    let marker = L.marker(latLong).addTo(mymap);

    // adding a circle around the pin pointed location
    let circle = L.circle(latLong, {
      color: 'green',
      fillColor: 'rgb(75, 198, 75)',
      fillOpacity: 0.5,
      radius: 50
     }).addTo(mymap);

    //  Displaying a message on the pointer
    marker.bindPopup("<b>Hello</b><br>You Are Here.").openPopup();

    });


    this.watchPosition();


  }

  onSearch(): void {
    if (this.searchTerm.length >= 3) {
      // Redirect to another component with the search term, e.g., a search results page
      this.router.navigate(['/search', { query: this.searchTerm }]);
    }
  }

  watchPosition() {
    let desLat = 0;
    let desLon = 0;
    let id = navigator.geolocation.watchPosition((position) => {
      console.log(
        `lat: ${position.coords.latitude}, lon: ${position.coords.longitude}`
      );
      if(position.coords.latitude) {
        navigator.geolocation.clearWatch(id);
      }
    }, (err) => {
      console.log(err);
    }, {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    }
  );
  }

  navigateToReport() {
    this.ls.showLoader();

      this.router.navigate(['/report'])
  }

  navigateToAvenueLoader() {
    this.ls.showLoader();
    
  }
}

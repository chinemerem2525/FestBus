import { Component, OnInit } from '@angular/core';


// declaring L to be accessable as a global javascript variable
declare const L: any;
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  searchTerm: string = '';

  constructor() { }

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

  // onSearch(): void {
  //   if (this.searchTerm.length >= 3) {
  //     // Redirect to another component with the search term, e.g., a search results page
  //     this.router.navigate(['/search', { query: this.searchTerm }]);
  //   }
  // }

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


}

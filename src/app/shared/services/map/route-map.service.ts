import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { RouteMap } from '../../model/route';

@Injectable({
  providedIn: 'root'
})
export class RouteMapService {
  private busStops: RouteMap[] = [
    { name: '1st Avenue', lat: 6.4713679, lng: 3.295499, busNumber: 1 },
    { name: '2nd Avenue', lat: 6.4626138, lng: 3.2860684, busNumber: 2 },
    { name: '3rd Avenue', lat:6.466900, lng: 3.283200, busNumber: 3 },
    { name: '4th Avenue', lat: 6.468300, lng: 3.284700, busNumber: 4 },
    { name: '5th Avenue', lat: 6.4676632429, lng: 3.27985839962, busNumber: 5 },
    { name: '6th Avenue', lat: 6.4804574884, lng: 3.27769705630, busNumber: 6 },
    { name: '7th Avenue', lat: 6.467512753692101, lng: 3.270667521483663, busNumber: 7 },
    { name: 'Alakija Bus Stop', lat: 6.4600, lng: 3.3256, busNumber: 11 },

    { name: '1st Close, 1st Avenue', lat: 6.465400, lng: 3.280500, busNumber: 1 },
    { name: '2nd Close, 1st Avenue', lat: 6.467200, lng: 3.284500, busNumber: 1 },
    { name: '3rd Close, 1st Avenue', lat: 6.467000, lng: 3.282800, busNumber: 1 },


    { name: '23 Road', lat: 6.466735305275345, lng: 3.2762044664301766, busNumber: 1 },
    { name: '23 Road, F Close', lat: 6.466150826607406,lng: 3.2772712574062433, busNumber: 1 },
    { name: '23 Road, A Close', lat: 6.462151035552329,lng: 3.2771544752490014, busNumber: 1 },
    { name: '23 Road, B Close', lat: 6.462835211067569,lng: 3.2768604349532096, busNumber: 1 },
    { name: '23 Road, C Close', lat: 6.463685401543472,lng: 3.2770487513266624, busNumber: 1 },
    { name: '23 Road, D Close', lat: 6.4644320344706205,lng: 3.276926279197272, busNumber: 1 },
    { name: '23 Road, G Close', lat: 6.46696154808439,lng: 3.277190013550299, busNumber: 1 },
    { name: '23 Road, H Close', lat: 6.467547432729718,lng: 3.27669987790448, busNumber: 1 },
    { name: '23 Road, E Close', lat: 6.4653782801338915,lng: 3.2774453778486836, busNumber: 1 },
    { name: '23 Road, I Close', lat: 6.469082051813972,lng: 3.2757774764013408, busNumber: 1 },
    { name: '23 Road, J Close', lat: 6.469764785472494,lng: 3.2754613881927193, busNumber: 1 },
    { name: '23 Road, L Close', lat: 6.471120344471686,lng: 3.2747700585855437, busNumber: 1 },
    { name: '23 Road, R Close', lat: 6.473163969750313,lng: 3.2746936874647945, busNumber: 1 },
    { name: '23 Road, S Close', lat: 6.4737161980321645,lng: 3.2746326425591037, busNumber: 1 },
    { name: '23 Road, T Close', lat: 6.474046184132448,lng: 3.2750477723303417, busNumber: 1 },
    { name: '23 Road, U Close', lat: 6.4744925111510705,lng: 3.2750711899062783, busNumber: 1 },
    { name: '23 Road, V Close', lat: 6.474958757652746,lng: 3.275534594924324, busNumber: 1 },
    { name: '23 Road, W Close', lat: 6.47558349935246,lng: 3.2753236318281074, busNumber: 1 },

    { name: '51 Road', lat: 6.47558349935246,lng: 3.2753236318281074, busNumber: 1 },

    { name: '52 Road', lat: 6.469165773657482,lng: 3.2778777951988074, busNumber: 1 },
    { name: '22 Road', lat:  6.46970379892376,lng: 3.2820751979571967, busNumber: 1 },

    { name: '24 Road', lat:  6.470025077163439,lng: 3.2732210733179725, busNumber: 1 },

    { name: '1st Close, 2nd Avenue', lat: 6.4681, lng: 3.3261, busNumber: 2 },
    { name: '2nd Close, 2nd Avenue', lat: 6.4683, lng: 3.3263, busNumber: 2 },
    { name: '3rd Close, 2nd Avenue', lat: 6.4685, lng: 3.3266, busNumber: 2 },

    { name: 'A.A Close, 7th Avenue', lat: 6.461362021510253,lng: 3.270362318400684, busNumber: 7 },
    { name: 'A1 Close, 7th Avenue', lat: 6.462171096430604,lng: 3.270912870262337, busNumber: 7 },
    { name: 'B1 Close, 7th Avenue', lat: 6.463077117870742,lng: 3.2705177984665346, busNumber: 7 },
    { name: '73 Road, 7th Avenue', lat: 6.463839708091691,lng: 3.2711368721794316,  busNumber: 7 },
    { name: '71 Road, 7th Avenue', lat: 6.4651299804203886,lng: 3.272660342726033,  busNumber: 7 },
    { name: '72 Road, 7th Avenue', lat: 6.47041794945342,lng: 3.2710058019711554,  busNumber: 7 },
    { name: 'G Close, 7th Avenue', lat: 6.466059584010875, lng: 3.2723178174673295,  busNumber: 7 },
    { name: 'H Close, 7th Avenue', lat: 6.466755515663303,lng: 3.2719650675805845,  busNumber: 7 },


    { name: 'Alakija Bus Stop', lat: 6.458255138945738, lng: 3.271819208258631, busNumber: 11 },


  ];

  constructor() { }

  getLocation(): Observable<RouteMap[]>{
    return of(this.busStops)
  }

  getLatLngByName(name: string): { lat: number, lng: number } | null {
    const busStop = this.busStops.find(bus => bus.name.toLowerCase() === name.toLowerCase());
    if (busStop) {
      return { lat: busStop.lat, lng: busStop.lng };
    }
    return null; // Return null if the bus stop with the specified name is not found
  }

  // Method to get stops between two locations with custom short and long routes
 getStopsBetweenLocations(from: string, to: string, isShortRoute: boolean): Observable<string[]> {
  if (from === "1st Avenue" && to === "2nd Avenue") {
    const shortRouteStops = ["1st Avenue", "Main Street", "Central Park", "2nd Avenue"];
    const longRouteStops = ["1st Avenue", "Main Street", "North Plaza", "East Gate", "South Park", "2nd Avenue"];
    return of(isShortRoute ? shortRouteStops : longRouteStops);
  }

  if (from === "1st Avenue" && to === "3rd Avenue") {
    const shortRouteStops = ["1st Avenue", "Main Street", "Central Park", "3rd Avenue"];
    const longRouteStops = ["1st Avenue", "Main Street", "North Plaza", "East Gate", "South Park", "3rd Avenue"];
    return of(isShortRoute ? shortRouteStops : longRouteStops);
  }

  if (from === "1st Avenue" && to === "4th Avenue") {
    const shortRouteStops = ["1st Avenue", "Main Street", "Central Park", "Festival Mall", "4th Avenue"];
    const longRouteStops = ["1st Avenue", "Main Street", "North Plaza", "East Gate", "Festival Mall", "South Park", "4th Avenue"];
    return of(isShortRoute ? shortRouteStops : longRouteStops);
  }

  if (from === "1st Avenue" && to === "5th Avenue") {
    const shortRouteStops = ["1st Avenue", "Main Street", "Central Park", "Festival Mall", "5th Avenue"];
    const longRouteStops = ["1st Avenue", "Main Street", "North Plaza", "East Gate", "Festival Mall", "South Park", "5th Avenue"];
    return of(isShortRoute ? shortRouteStops : longRouteStops);
  }

  if (from === "1st Avenue" && to === "6th Avenue") {
    const shortRouteStops = ["1st Avenue", "Main Street", "Central Park", "Golden Tulip Festac", "6th Avenue"];
    const longRouteStops = ["1st Avenue", "Main Street", "North Plaza", "East Gate", "Festival Mall", "6th Avenue"];
    return of(isShortRoute ? shortRouteStops : longRouteStops);
  }

  if (from === "1st Avenue" && to === "7th Avenue") {
    const shortRouteStops = ["1st Avenue", "Main Street", "Central Park", "Festival Mall", "7th Avenue"];
    const longRouteStops = ["1st Avenue", "Main Street", "North Plaza", "East Gate", "Festival Mall", "7th Avenue"];
    return of(isShortRoute ? shortRouteStops : longRouteStops);
  }

  if (from === "1st Avenue" && to === "8th Avenue") {
    const shortRouteStops = ["1st Avenue", "Main Street", "Central Park", "Festival Mall", "8th Avenue"];
    const longRouteStops = ["1st Avenue", "Main Street", "North Plaza", "East Gate", "Festival Mall", "South Park", "8th Avenue"];
    return of(isShortRoute ? shortRouteStops : longRouteStops);
  }

  // Routes from "2nd Avenue"
  if (from === "2nd Avenue" && to === "3rd Avenue") {
    const shortRouteStops = ["2nd Avenue", "Central Park", "3rd Avenue"];
    const longRouteStops = ["2nd Avenue", "Main Street", "North Plaza", "South Park", "3rd Avenue"];
    return of(isShortRoute ? shortRouteStops : longRouteStops);
  }

  if (from === "2nd Avenue" && to === "4th Avenue") {
    const shortRouteStops = ["2nd Avenue", "Central Park", "3rd Avenue", "Festival Mall", "4th Avenue"];
    const longRouteStops = ["2nd Avenue", "Main Street", "North Plaza", "South Park", "Festival Mall", "4th Avenue"];
    return of(isShortRoute ? shortRouteStops : longRouteStops);
  }

  if (from === "2nd Avenue" && to === "5th Avenue") {
    const shortRouteStops = ["2nd Avenue", "Central Park", "Festival Mall", "5th Avenue"];
    const longRouteStops = ["2nd Avenue", "Main Street", "North Plaza", "East Gate", "Festival Mall", "5th Avenue"];
    return of(isShortRoute ? shortRouteStops : longRouteStops);
  }

  if (from === "2nd Avenue" && to === "6th Avenue") {
    const shortRouteStops = ["2nd Avenue", "Festival Mall", "6th Avenue"];
    const longRouteStops = ["2nd Avenue", "Main Street", "East Gate", "South Park", "Festival Mall", "6th Avenue"];
    return of(isShortRoute ? shortRouteStops : longRouteStops);
  }

  if (from === "2nd Avenue" && to === "7th Avenue") {
    const shortRouteStops = ["2nd Avenue", "Festival Mall", "7th Avenue"];
    const longRouteStops = ["2nd Avenue", "Main Street", "East Gate", "South Park", "Festival Mall", "7th Avenue"];
    return of(isShortRoute ? shortRouteStops : longRouteStops);
  }

  if (from === "2nd Avenue" && to === "8th Avenue") {
    const shortRouteStops = ["2nd Avenue", "Festival Mall", "8th Avenue"];
    const longRouteStops = ["2nd Avenue", "Main Street", "East Gate", "South Park", "Festival Mall", "8th Avenue"];
    return of(isShortRoute ? shortRouteStops : longRouteStops);
  }

  // Routes from "3rd Avenue"
  if (from === "3rd Avenue" && to === "4th Avenue") {
    const shortRouteStops = ["3rd Avenue", "Festival Mall", "4th Avenue"];
    const longRouteStops = ["3rd Avenue", "Main Street", "North Plaza", "South Park", "Festival Mall", "4th Avenue"];
    return of(isShortRoute ? shortRouteStops : longRouteStops);
  }

  if (from === "3rd Avenue" && to === "5th Avenue") {
    const shortRouteStops = ["3rd Avenue", "Festival Mall", "5th Avenue"];
    const longRouteStops = ["3rd Avenue", "Main Street", "East Gate", "South Park", "Festival Mall", "5th Avenue"];
    return of(isShortRoute ? shortRouteStops : longRouteStops);
  }

  if (from === "3rd Avenue" && to === "6th Avenue") {
    const shortRouteStops = ["3rd Avenue", "Festival Mall", "6th Avenue"];
    const longRouteStops = ["3rd Avenue", "Main Street", "East Gate", "South Park", "Festival Mall", "6th Avenue"];
    return of(isShortRoute ? shortRouteStops : longRouteStops);
  }

  if (from === "3rd Avenue" && to === "7th Avenue") {
    const shortRouteStops = ["3rd Avenue", "Festival Mall", "7th Avenue"];
    const longRouteStops = ["3rd Avenue", "Main Street", "East Gate", "South Park", "Festival Mall", "7th Avenue"];
    return of(isShortRoute ? shortRouteStops : longRouteStops);
  }

  if (from === "3rd Avenue" && to === "8th Avenue") {
    const shortRouteStops = ["3rd Avenue", "Festival Mall", "8th Avenue"];
    const longRouteStops = ["3rd Avenue", "Main Street", "East Gate", "South Park", "Festival Mall", "8th Avenue"];
    return of(isShortRoute ? shortRouteStops : longRouteStops);
  }

  // Routes from "4th Avenue"
  if (from === "4th Avenue" && to === "5th Avenue") {
    const shortRouteStops = ["4th Avenue", "Festival Mall", "5th Avenue"];
    const longRouteStops = ["4th Avenue", "Main Street", "East Gate", "South Park", "Festival Mall", "5th Avenue"];
    return of(isShortRoute ? shortRouteStops : longRouteStops);
  }

  if (from === "4th Avenue" && to === "6th Avenue") {
    const shortRouteStops = ["4th Avenue", "Festival Mall", "6th Avenue"];
    const longRouteStops = ["4th Avenue", "Main Street", "East Gate", "South Park", "Festival Mall", "6th Avenue"];
    return of(isShortRoute ? shortRouteStops : longRouteStops);
  }

  if (from === "4th Avenue" && to === "7th Avenue") {
    const shortRouteStops = ["4th Avenue", "Festival Mall", "7th Avenue"];
    const longRouteStops = ["4th Avenue", "Main Street", "East Gate", "South Park", "Festival Mall", "7th Avenue"];
    return of(isShortRoute ? shortRouteStops : longRouteStops);
  }

  if (from === "4th Avenue" && to === "8th Avenue") {
    const shortRouteStops = ["4th Avenue", "Festival Mall", "8th Avenue"];
    const longRouteStops = ["4th Avenue", "Main Street", "East Gate", "South Park", "Festival Mall", "8th Avenue"];
    return of(isShortRoute ? shortRouteStops : longRouteStops);
  }

  // Routes from "5th Avenue"
  if (from === "5th Avenue" && to === "6th Avenue") {
    const shortRouteStops = ["5th Avenue", "Festival Mall", "6th Avenue"];
    const longRouteStops = ["5th Avenue", "Main Street", "East Gate", "South Park", "Festival Mall", "6th Avenue"];
    return of(isShortRoute ? shortRouteStops : longRouteStops);
  }

  if (from === "5th Avenue" && to === "7th Avenue") {
    const shortRouteStops = ["5th Avenue", "Festival Mall", "7th Avenue"];
    const longRouteStops = ["5th Avenue", "Main Street", "East Gate", "South Park", "Festival Mall", "7th Avenue"];
    return of(isShortRoute ? shortRouteStops : longRouteStops);
  }

  if (from === "5th Avenue" && to === "8th Avenue") {
    const shortRouteStops = ["5th Avenue", "Festival Mall", "8th Avenue"];
    const longRouteStops = ["5th Avenue", "Main Street", "East Gate", "South Park", "Festival Mall", "8th Avenue"];
    return of(isShortRoute ? shortRouteStops : longRouteStops);
  }

  // Routes from "6th Avenue"
  if (from === "6th Avenue" && to === "7th Avenue") {
    const shortRouteStops = ["6th Avenue", "Festival Mall", "7th Avenue"];
    const longRouteStops = ["6th Avenue", "Main Street", "East Gate", "South Park", "Festival Mall", "7th Avenue"];
    return of(isShortRoute ? shortRouteStops : longRouteStops);
  }
  if (from === "2nd Avenue" && to === "1st Avenue") {
    const shortRouteStops = ["2nd Avenue", "Main Street", "Central Park", "1st Avenue"];
    const longRouteStops = ["2nd Avenue", "Main Street", "North Plaza", "East Gate", "South Park", "1st Avenue"];
    return of(isShortRoute ? shortRouteStops : longRouteStops);
  }

  if (from === "3rd Avenue" && to === "1st Avenue") {
    const shortRouteStops = ["3rd Avenue", "Main Street", "Central Park", "1st Avenue"];
    const longRouteStops = ["3rd Avenue", "Main Street", "North Plaza", "East Gate", "South Park", "1st Avenue"];
    return of(isShortRoute ? shortRouteStops : longRouteStops);
  }

  if (from === "4th Avenue" && to === "1st Avenue") {
    const shortRouteStops = ["4th Avenue", "Main Street", "Central Park", "Festival Mall", "1st Avenue"];
    const longRouteStops = ["4th Avenue", "Main Street", "North Plaza", "East Gate", "Festival Mall", "South Park", "1st Avenue"];
    return of(isShortRoute ? shortRouteStops : longRouteStops);
  }

  if (from === "5th Avenue" && to === "1st Avenue") {
    const shortRouteStops = ["5th Avenue", "Main Street", "Central Park", "Festival Mall", "1st Avenue"];
    const longRouteStops = ["5th Avenue", "Main Street", "North Plaza", "East Gate", "Festival Mall", "South Park", "1st Avenue"];
    return of(isShortRoute ? shortRouteStops : longRouteStops);
  }

  if (from === "6th Avenue" && to === "1st Avenue") {
    const shortRouteStops = ["6th Avenue", "Main Street", "Central Park", "Golden Tulip Festac", "1st Avenue"];
    const longRouteStops = ["6th Avenue", "Main Street", "North Plaza", "East Gate", "Festival Mall", "1st Avenue"];
    return of(isShortRoute ? shortRouteStops : longRouteStops);
  }

  if (from === "7th Avenue" && to === "1st Avenue") {
    const shortRouteStops = ["7th Avenue", "Main Street", "Central Park", "Festival Mall", "1st Avenue"];
    const longRouteStops = ["7th Avenue", "Main Street", "North Plaza", "East Gate", "Festival Mall", "1st Avenue"];
    return of(isShortRoute ? shortRouteStops : longRouteStops);
  }

  if (from === "8th Avenue" && to === "1st Avenue") {
    const shortRouteStops = ["8th Avenue", "Main Street", "Central Park", "Festival Mall", "1st Avenue"];
    const longRouteStops = ["8th Avenue", "Main Street", "North Plaza", "East Gate", "Festival Mall", "South Park", "1st Avenue"];
    return of(isShortRoute ? shortRouteStops : longRouteStops);
  }

  // Reverse Routes from "2nd Avenue"
  if (from === "3rd Avenue" && to === "2nd Avenue") {
    const shortRouteStops = ["3rd Avenue", "Central Park", "2nd Avenue"];
    const longRouteStops = ["3rd Avenue", "Main Street", "North Plaza", "South Park", "2nd Avenue"];
    return of(isShortRoute ? shortRouteStops : longRouteStops);
  }

  if (from === "4th Avenue" && to === "2nd Avenue") {
    const shortRouteStops = ["4th Avenue", "Festival Mall", "3rd Avenue", "Central Park", "2nd Avenue"];
    const longRouteStops = ["4th Avenue", "Main Street", "North Plaza", "South Park", "Festival Mall", "2nd Avenue"];
    return of(isShortRoute ? shortRouteStops : longRouteStops);
  }

  if (from === "5th Avenue" && to === "2nd Avenue") {
    const shortRouteStops = ["5th Avenue", "Festival Mall", "3rd Avenue", "Central Park", "2nd Avenue"];
    const longRouteStops = ["5th Avenue", "Main Street", "North Plaza", "East Gate", "Festival Mall", "2nd Avenue"];
    return of(isShortRoute ? shortRouteStops : longRouteStops);
  }

  if (from === "6th Avenue" && to === "2nd Avenue") {
    const shortRouteStops = ["6th Avenue", "Festival Mall", "3rd Avenue", "Central Park", "2nd Avenue"];
    const longRouteStops = ["6th Avenue", "Main Street", "East Gate", "South Park", "Festival Mall", "2nd Avenue"];
    return of(isShortRoute ? shortRouteStops : longRouteStops);
  }

  if (from === "7th Avenue" && to === "2nd Avenue") {
    const shortRouteStops = ["7th Avenue", "Festival Mall", "3rd Avenue", "Central Park", "2nd Avenue"];
    const longRouteStops = ["7th Avenue", "Main Street", "East Gate", "South Park", "Festival Mall", "2nd Avenue"];
    return of(isShortRoute ? shortRouteStops : longRouteStops);
  }

  if (from === "8th Avenue" && to === "2nd Avenue") {
    const shortRouteStops = ["8th Avenue", "Festival Mall", "3rd Avenue", "Central Park", "2nd Avenue"];
    const longRouteStops = ["8th Avenue", "Main Street", "East Gate", "South Park", "Festival Mall", "2nd Avenue"];
    return of(isShortRoute ? shortRouteStops : longRouteStops);
  }

  // Reverse Routes from "3rd Avenue"
  if (from === "4th Avenue" && to === "3rd Avenue") {
    const shortRouteStops = ["4th Avenue", "Festival Mall", "3rd Avenue"];
    const longRouteStops = ["4th Avenue", "Main Street", "North Plaza", "South Park", "Festival Mall", "3rd Avenue"];
    return of(isShortRoute ? shortRouteStops : longRouteStops);
  }

  if (from === "5th Avenue" && to === "3rd Avenue") {
    const shortRouteStops = ["5th Avenue", "Festival Mall", "3rd Avenue"];
    const longRouteStops = ["5th Avenue", "Main Street", "East Gate", "South Park", "Festival Mall", "3rd Avenue"];
    return of(isShortRoute ? shortRouteStops : longRouteStops);
  }

  if (from === "6th Avenue" && to === "3rd Avenue") {
    const shortRouteStops = ["6th Avenue", "Festival Mall", "3rd Avenue"];
    const longRouteStops = ["6th Avenue", "Main Street", "East Gate", "South Park", "Festival Mall", "3rd Avenue"];
    return of(isShortRoute ? shortRouteStops : longRouteStops);
  }

  if (from === "7th Avenue" && to === "3rd Avenue") {
    const shortRouteStops = ["7th Avenue", "Festival Mall", "3rd Avenue"];
    const longRouteStops = ["7th Avenue", "Main Street", "East Gate", "South Park", "Festival Mall", "3rd Avenue"];
    return of(isShortRoute ? shortRouteStops : longRouteStops);
  }

  if (from === "8th Avenue" && to === "3rd Avenue") {
    const shortRouteStops = ["8th Avenue", "Festival Mall", "3rd Avenue"];
    const longRouteStops = ["8th Avenue", "Main Street", "East Gate", "South Park", "Festival Mall", "3rd Avenue"];
    return of(isShortRoute ? shortRouteStops : longRouteStops);
  }
  // Reverse Routes from "4th Avenue"
  if (from === "5th Avenue" && to === "4th Avenue") {
    const shortRouteStops = ["5th Avenue", "Festival Mall", "4th Avenue"];
    const longRouteStops = ["5th Avenue", "Main Street", "North Plaza", "South Park", "Festival Mall", "4th Avenue"];
    return of(isShortRoute ? shortRouteStops : longRouteStops);
  }

  if (from === "6th Avenue" && to === "4th Avenue") {
    const shortRouteStops = ["6th Avenue", "Festival Mall", "4th Avenue"];
    const longRouteStops = ["6th Avenue", "Main Street", "East Gate", "South Park", "Festival Mall", "4th Avenue"];
    return of(isShortRoute ? shortRouteStops : longRouteStops);
  }

  if (from === "7th Avenue" && to === "4th Avenue") {
    const shortRouteStops = ["7th Avenue", "Festival Mall", "4th Avenue"];
    const longRouteStops = ["7th Avenue", "Main Street", "East Gate", "South Park", "Festival Mall", "4th Avenue"];
    return of(isShortRoute ? shortRouteStops : longRouteStops);
  }

  if (from === "8th Avenue" && to === "4th Avenue") {
    const shortRouteStops = ["8th Avenue", "Festival Mall", "4th Avenue"];
    const longRouteStops = ["8th Avenue", "Main Street", "East Gate", "South Park", "Festival Mall", "4th Avenue"];
    return of(isShortRoute ? shortRouteStops : longRouteStops);
  }

  // Reverse Routes from "5th Avenue"
  if (from === "6th Avenue" && to === "5th Avenue") {
    const shortRouteStops = ["6th Avenue", "Festival Mall", "5th Avenue"];
    const longRouteStops = ["6th Avenue", "Main Street", "North Plaza", "South Park", "Festival Mall", "5th Avenue"];
    return of(isShortRoute ? shortRouteStops : longRouteStops);
  }

  if (from === "7th Avenue" && to === "5th Avenue") {
    const shortRouteStops = ["7th Avenue", "Festival Mall", "5th Avenue"];
    const longRouteStops = ["7th Avenue", "Main Street", "East Gate", "South Park", "Festival Mall", "5th Avenue"];
    return of(isShortRoute ? shortRouteStops : longRouteStops);
  }

  if (from === "8th Avenue" && to === "5th Avenue") {
    const shortRouteStops = ["8th Avenue", "Festival Mall", "5th Avenue"];
    const longRouteStops = ["8th Avenue", "Main Street", "East Gate", "South Park", "Festival Mall", "5th Avenue"];
    return of(isShortRoute ? shortRouteStops : longRouteStops);
  }

  // Reverse Routes from "6th Avenue"
  if (from === "7th Avenue" && to === "6th Avenue") {
    const shortRouteStops = ["7th Avenue", "Festival Mall", "6th Avenue"];
    const longRouteStops = ["7th Avenue", "Main Street", "North Plaza", "South Park", "Festival Mall", "6th Avenue"];
    return of(isShortRoute ? shortRouteStops : longRouteStops);
  }



    // Reverse Routes from "Main Street"
    if (from === "Festival Mall" && to === "Main Street") {
      const shortRouteStops = ["Festival Mall", "Main Street"];
      const longRouteStops = ["Festival Mall", "North Plaza", "East Gate", "South Park", "Main Street"];
      return of(isShortRoute ? shortRouteStops : longRouteStops);
    }

    if (from === "Central Park" && to === "Main Street") {
      const shortRouteStops = ["Central Park", "Main Street"];
      const longRouteStops = ["Central Park", "North Plaza", "East Gate", "South Park", "Main Street"];
      return of(isShortRoute ? shortRouteStops : longRouteStops);
    }

    // Reverse Routes from "Festival Mall"
    if (from === "Central Park" && to === "Festival Mall") {
      const shortRouteStops = ["Central Park", "Festival Mall"];
      const longRouteStops = ["Central Park", "South Park", "East Gate", "North Plaza", "Festival Mall"];
      return of(isShortRoute ? shortRouteStops : longRouteStops);
    }

    if (from === "Main Street" && to === "Festival Mall") {
      const shortRouteStops = ["Main Street", "Festival Mall"];
      const longRouteStops = ["Main Street", "South Park", "East Gate", "North Plaza", "Festival Mall"];
      return of(isShortRoute ? shortRouteStops : longRouteStops);
    }

    // Reverse Routes from "North Plaza"
    if (from === "South Park" && to === "North Plaza") {
      const shortRouteStops = ["South Park", "North Plaza"];
      const longRouteStops = ["South Park", "East Gate", "Festival Mall", "North Plaza"];
      return of(isShortRoute ? shortRouteStops : longRouteStops);
    }

    if (from === "East Gate" && to === "North Plaza") {
      const shortRouteStops = ["East Gate", "North Plaza"];
      const longRouteStops = ["East Gate", "Festival Mall", "South Park", "North Plaza"];
      return of(isShortRoute ? shortRouteStops : longRouteStops);
    }

    // Reverse Routes from "South Park"
    if (from === "East Gate" && to === "South Park") {
      const shortRouteStops = ["East Gate", "South Park"];
      const longRouteStops = ["East Gate", "Festival Mall", "North Plaza", "South Park"];
      return of(isShortRoute ? shortRouteStops : longRouteStops);
    }

    if (from === "Festival Mall" && to === "South Park") {
      const shortRouteStops = ["Festival Mall", "South Park"];
      const longRouteStops = ["Festival Mall", "North Plaza", "East Gate", "South Park"];
      return of(isShortRoute ? shortRouteStops : longRouteStops);
    }

    // Reverse Routes from "East Gate"
    if (from === "Festival Mall" && to === "East Gate") {
      const shortRouteStops = ["Festival Mall", "East Gate"];
      const longRouteStops = ["Festival Mall", "North Plaza", "South Park", "East Gate"];
      return of(isShortRoute ? shortRouteStops : longRouteStops);
    }

    if (from === "North Plaza" && to === "East Gate") {
      const shortRouteStops = ["North Plaza", "East Gate"];
      const longRouteStops = ["North Plaza", "Festival Mall", "South Park", "East Gate"];
      return of(isShortRoute ? shortRouteStops : longRouteStops);
    }


  // Routes from "Festac First Gate"
  if (from === "Festac First Gate" && to === "Festac Second Gate") {
    const shortRouteStops = ["Festac First Gate", "Festac Second Gate"];
    const longRouteStops = ["Festac First Gate", "Festac Police Station", "Festac Second Gate"];
    return of(isShortRoute ? shortRouteStops : longRouteStops);
  }

  if (from === "Festac First Gate" && to === "Mile 2") {
    const shortRouteStops = ["Festac First Gate", "Apple Junction", "Mile 2"];
    const longRouteStops = ["Festac First Gate", "Festac Second Gate", "Festac Police Station", "Mile 2"];
    return of(isShortRoute ? shortRouteStops : longRouteStops);
  }

  // Routes from "Festac Second Gate"
  if (from === "Festac Second Gate" && to === "Mile 2") {
    const shortRouteStops = ["Festac Second Gate", "Apple Junction", "Mile 2"];
    const longRouteStops = ["Festac Second Gate", "Festac Police Station", "Agboju Market", "Mile 2"];
    return of(isShortRoute ? shortRouteStops : longRouteStops);
  }

  if (from === "Festac Second Gate" && to === "Agboju Market") {
    const shortRouteStops = ["Festac Second Gate", "Agboju Market"];
    const longRouteStops = ["Festac Second Gate", "Apple Junction", "Agboju Market"];
    return of(isShortRoute ? shortRouteStops : longRouteStops);
  }

  // Routes from "Apple Junction"
  if (from === "Apple Junction" && to === "Alakija") {
    const shortRouteStops = ["Apple Junction", "Agboju Market", "Alakija"];
    const longRouteStops = ["Apple Junction", "Festac Police Station", "Agboju Market", "Alakija"];
    return of(isShortRoute ? shortRouteStops : longRouteStops);
  }

  if (from === "Apple Junction" && to === "Satellite Town") {
    const shortRouteStops = ["Apple Junction", "Agboju Market", "Alakija", "Satellite Town"];
    const longRouteStops = ["Apple Junction", "Festac Police Station", "Agboju Market", "Alakija", "Satellite Town"];
    return of(isShortRoute ? shortRouteStops : longRouteStops);
  }

  if (from === "21 Road" && to === "Festac Police Station") {
    const shortRouteStops = ["21 Road", "23 Road", "Festac Police Station"];
    const longRouteStops = ["21 Road", "Festival Mall", "23 Road", "Festac Police Station"];
    return of(isShortRoute ? shortRouteStops : longRouteStops);
  }

  if (from === "7th Avenue" && to === "Golden Tulip Festac") {
    const shortRouteStops = ["7th Avenue", "Festival Mall", "Golden Tulip Festac"];
    const longRouteStops = ["7th Avenue", "Festival Mall", "23 Road", "Festac Police Station", "Golden Tulip Festac"];
    return of(isShortRoute ? shortRouteStops : longRouteStops);
  }

  if (from === "Abule Ado" && to === "Agboju Market") {
    const shortRouteStops = ["Abule Ado", "Satellite Town", "Agboju Market"];
    const longRouteStops = ["Abule Ado", "Ijegun", "Satellite Town", "Agboju Market"];
    return of(isShortRoute ? shortRouteStops : longRouteStops);
  }

  if (from === "Volks Bus Stop" && to === "Ojo Road") {
    const shortRouteStops = ["Volks Bus Stop", "Abule Osun", "Ojo Road"];
    const longRouteStops = ["Volks Bus Stop", "Mazamaza", "Alaba International", "Ojo Road"];
    return of(isShortRoute ? shortRouteStops : longRouteStops);
  }

  if (from === "Alaba International" && to === "Volks Bus Stop") {
    const shortRouteStops = ["Alaba International", "Volks Bus Stop"];
    const longRouteStops = ["Alaba International", "Ojo Road", "Volks Bus Stop"];
    return of(isShortRoute ? shortRouteStops : longRouteStops);
  }

  if (from === "Ijegun" && to === "Satellite Town") {
    const shortRouteStops = ["Ijegun", "Satellite Town"];
    const longRouteStops = ["Ijegun", "Abule Ado", "Satellite Town"];
    return of(isShortRoute ? shortRouteStops : longRouteStops);
  }

  if (from === "Festival Mall" && to === "23 Road") {
    const shortRouteStops = ["Festival Mall", "23 Road"];
    const longRouteStops = ["Festival Mall", "1st Avenue", "23 Road"];
    return of(isShortRoute ? shortRouteStops : longRouteStops);
  }

  if (from === "Agboju Market" && to === "Festac First Gate") {
    const shortRouteStops = ["Agboju Market", "Festac First Gate"];
    const longRouteStops = ["Agboju Market", "Mile 2", "Festac First Gate"];
    return of(isShortRoute ? shortRouteStops : longRouteStops);
  }

  if (from === "Mile 2" && to === "Apple Junction") {
    const shortRouteStops = ["Mile 2", "Apple Junction"];
    const longRouteStops = ["Mile 2", "Festac First Gate", "Apple Junction"];
    return of(isShortRoute ? shortRouteStops : longRouteStops);
  }

  if (from === "23 Road" && to === "1st Avenue") {
    const shortRouteStops = ["23 Road", "1st Avenue"];
    const longRouteStops = ["23 Road", "Festival Mall", "1st Avenue"];
    return of(isShortRoute ? shortRouteStops : longRouteStops);
  }

  if (from === "Alakija" && to === "Mazamaza") {
    const shortRouteStops = ["Alakija", "Mazamaza"];
    const longRouteStops = ["Alakija", "Agboju Market", "Mazamaza"];
    return of(isShortRoute ? shortRouteStops : longRouteStops);
  }

  if (from === "Amuwo Odofin" && to === "Alakija") {
    const shortRouteStops = ["Amuwo Odofin", "Alakija"];
    const longRouteStops = ["Amuwo Odofin", "Festac First Gate", "Alakija"];
    return of(isShortRoute ? shortRouteStops : longRouteStops);
  }

  if (from === "Ijegun" && to === "Amuwo Odofin") {
    const shortRouteStops = ["Ijegun", "Amuwo Odofin"];
    const longRouteStops = ["Ijegun", "Satellite Town", "Amuwo Odofin"];
    return of(isShortRoute ? shortRouteStops : longRouteStops);
  }

  if (from === "Festac Primary School" && to === "7th Avenue") {
    const shortRouteStops = ["Festac Primary School", "7th Avenue"];
    const longRouteStops = ["Festac Primary School", "Festival Mall", "7th Avenue"];
    return of(isShortRoute ? shortRouteStops : longRouteStops);
  }

  if (from === "Central Park" && to === "1st Avenue") {
    const shortRouteStops = ["Central Park", "1st Avenue"];
    const longRouteStops = ["Central Park", "East Gate", "1st Avenue"];
    return of(isShortRoute ? shortRouteStops : longRouteStops);
  }

  if (from === "Apple Junction" && to === "Ijegun") {
    const shortRouteStops = ["Apple Junction", "Ijegun"];
    const longRouteStops = ["Apple Junction", "Satellite Town", "Ijegun"];
    return of(isShortRoute ? shortRouteStops : longRouteStops);
  }
  if (from === "Main Street" && to === "Central Park") {
    const shortRouteStops = ["Main Street", "Central Park"];
    const longRouteStops = ["Main Street", "North Plaza", "East Gate", "Central Park"];
    return of(isShortRoute ? shortRouteStops : longRouteStops);
  }

  if (from === "Main Gate" && to === "Central Park") {
    const shortRouteStops = ["Main Gate", "Central Park"];
    const longRouteStops = ["Main Gate", "East Gate", "South Park", "Central Park"];
    return of(isShortRoute ? shortRouteStops : longRouteStops);
  }

  // Routes from "Mile 2"
  if (from === "Mile 2" && to === "Amuwo Odofin") {
    const shortRouteStops = ["Mile 2", "Apple Junction", "Amuwo Odofin"];
    const longRouteStops = ["Mile 2", "Agboju Market", "Apple Junction", "Amuwo Odofin"];
    return of(isShortRoute ? shortRouteStops : longRouteStops);
  }

  if (from === "Mile 2" && to === "Volks Bus Stop") {
    const shortRouteStops = ["Mile 2", "Alakija", "Volks Bus Stop"];
    const longRouteStops = ["Mile 2", "Agboju Market", "Alakija", "Volks Bus Stop"];
    return of(isShortRoute ?  shortRouteStops : longRouteStops);
  }

  return of([]); // Return empty observable if no match
}
}

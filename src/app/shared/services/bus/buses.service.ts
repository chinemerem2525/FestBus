import { Injectable } from '@angular/core';

export interface Bus {
  name: string;
  lat: number;
  lng: number;
  busNumber: number;
  }

@Injectable({
  providedIn: 'root'
})
export class BusesService {
  private busStops: Bus[] = [
    { name: '1st Avenue', lat: 6.4667, lng: 3.3250, busNumber: 1 },
    { name: '2nd Avenue', lat: 6.4680, lng: 3.3275, busNumber: 2 },
    { name: '3rd Avenue', lat: 6.4672, lng: 3.3281, busNumber: 3 },
    { name: '4th Avenue', lat: 6.4660, lng: 3.3295, busNumber: 4 },
    { name: '5th Avenue', lat: 6.4695, lng: 3.3292, busNumber: 5 },
    { name: '6th Avenue', lat: 6.4702, lng: 3.3269, busNumber: 6 },
    { name: '7th Avenue', lat: 6.4700, lng: 3.3300, busNumber: 7 },
    { name: '8th Avenue', lat: 6.4708, lng: 3.3304, busNumber: 8 },
    { name: '10th Avenue', lat: 6.4688, lng: 3.3288, busNumber: 10 },
    { name: 'Alakija Bus Stop', lat: 6.4600, lng: 3.3256, busNumber: 11 },
  ];

  constructor() { }

  getBusStopsByNumber(busNumber: number): Bus[] {
    // Filter the bus stops to match the specified bus number
    return this.busStops.filter(busStop => busStop.busNumber === busNumber);
  }


}

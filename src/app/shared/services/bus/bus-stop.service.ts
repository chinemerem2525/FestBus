import { Injectable } from '@angular/core';

export interface BusStop {
  name: string;
  lat: number;
  lng: number;
}

@Injectable({
  providedIn: 'root',
})
export class BusStopService {
  private busStops: BusStop[] = [
    { name: '1st Avenue', lat: 6.4667, lng: 3.3250 },
    { name: '2nd Avenue', lat: 6.4680, lng: 3.3275 },
    { name: '3rd Avenue', lat: 6.4672, lng: 3.3281 },
    { name: '4th Avenue', lat: 6.4660, lng: 3.3295 },
    { name: '5th Avenue', lat: 6.4695, lng: 3.3292 },
    { name: '6th Avenue', lat: 6.4702, lng: 3.3269 },
    { name: '7th Avenue', lat: 6.4700, lng: 3.3300 },
    { name: '8th Avenue', lat: 6.4708, lng: 3.3304 },
    { name: '10th Avenue', lat: 6.4688, lng: 3.3288 },
    { name: 'Alakija Bus Stop', lat: 6.4600, lng: 3.3256 },

    { name: '1st Close, 1st Avenue', lat: 6.4669, lng: 3.3245 },
    { name: '2nd Close, 1st Avenue', lat: 6.4671, lng: 3.3247 },
    { name: '3rd Close, 1st Avenue', lat: 6.4673, lng: 3.3251 },
    { name: '23rd Close, 1st Avenue', lat: 6.4690, lng: 3.3310 },
    { name: '41st Road, 1st Avenue', lat: 6.4715, lng: 3.3340 },

    { name: '1st Close, 2nd Avenue', lat: 6.4681, lng: 3.3261 },
    { name: '2nd Close, 2nd Avenue', lat: 6.4683, lng: 3.3263 },
    { name: '3rd Close, 2nd Avenue', lat: 6.4685, lng: 3.3266 },

    { name: '1st Close, 7th Avenue', lat: 6.4705, lng: 3.3296 },
    { name: '2nd Close, 7th Avenue', lat: 6.4707, lng: 3.3299 },
    { name: '3rd Close, 7th Avenue', lat: 6.4710, lng: 3.3303 },

    { name: '12th Road, 6th Avenue', lat: 6.4665, lng: 3.3321 },
    { name: '15th Road, 6th Avenue', lat: 6.4661, lng: 3.3325 },
    { name: '11th Road, 6th Avenue', lat: 6.4670, lng: 3.3332 },
    { name: '24th Close, 7th Avenue', lat: 6.4701, lng: 3.3277 },

    { name: 'Alakija Bus Stop', lat: 6.4600, lng: 3.3256 },
    { name: 'Alakija Close', lat: 6.4598, lng: 3.3254 },
    { name: 'Alakija Market', lat: 6.4595, lng: 3.3251 },
  ];

  constructor() {}

  searchBusStops(query: string): string[] {
    if (!query || query.length === 0) {
      return [];
    }

    const lowercaseQuery = query.toLowerCase();

    return this.busStops
      .filter(busStop => {
        const busStopName = busStop.name.toLowerCase();

        // Match bus stop names or related closes
        if (busStopName.includes(lowercaseQuery)) {
          return true;
        }

        // Handle avenue queries and suggest related closes
        const avenueMatch = lowercaseQuery.match(/(\d+)(st|nd|rd|th)\s*avenue/);
        if (avenueMatch) {
          const avenueNumber = avenueMatch[1];
          return (
            busStopName.includes(avenueNumber + 'st') ||
            busStopName.includes(avenueNumber + 'nd') ||
            busStopName.includes(avenueNumber + 'rd') ||
            busStopName.includes(avenueNumber + 'th') ||
            busStopName.includes('close')
          );
        }

        return false;
      })
      .map(busStop => busStop.name);
  }

  getBusStops(): BusStop[] {
    return this.busStops;
  }

  getBusStopCoordinates(busStopName: string): { lat: number; lng: number } | null {
    const busStop = this.busStops.find(stop => stop.name === busStopName);
    return busStop ? { lat: busStop.lat, lng: busStop.lng } : null;
  }

  getStopsAlongRoute(fromCoords: { lat: number; lng: number }, toCoords: { lat: number; lng: number }): BusStop[] {
    const radius = 0.0001;
    return this.busStops.filter(stop =>
      stop.lat >= Math.min(fromCoords.lat, toCoords.lat) - radius &&
      stop.lat <= Math.max(fromCoords.lat, toCoords.lat) + radius &&
      stop.lng >= Math.min(fromCoords.lng, toCoords.lng) - radius &&
      stop.lng <= Math.max(fromCoords.lng, toCoords.lng) + radius
    );
  }

  getDistance(fromCoords: { lat: number; lng: number }, toCoords: { lat: number; lng: number }): number {
    const R = 6371; // Radius of the Earth in kilometers
    const dLat = this.deg2rad(toCoords.lat - fromCoords.lat);
    const dLng = this.deg2rad(toCoords.lng - fromCoords.lng);

    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(this.deg2rad(fromCoords.lat)) * Math.cos(this.deg2rad(toCoords.lat)) *
      Math.sin(dLng / 2) * Math.sin(dLng / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distanceInKm = R * c;

    return distanceInKm;
  }

  deg2rad(deg: number): number {
    return deg * (Math.PI / 180);
  }

  calculateDuration(distanceInKm: number, speedKmH: number): string {
    const durationInHours = distanceInKm / speedKmH;
    const durationInMinutes = Math.round(durationInHours * 60);
    return `${durationInMinutes} min`;
  }

  getDistanceAndDuration(fromCoords: { lat: number; lng: number }, toCoords: { lat: number; lng: number }, speedKmH: number) {
    const distance = this.getDistance(fromCoords, toCoords);
    const duration = this.calculateDuration(distance, speedKmH);
    return { distance, duration };
  }
}

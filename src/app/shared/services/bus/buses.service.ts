import { Injectable } from '@angular/core';

export interface Bus {
  name: string;
  lat: number;
  lng: number;
  busNumber: number[];
  }

@Injectable({
  providedIn: 'root'
})
export class BusesService {
  private busStops: Bus[] = [
    { name: '1st Avenue', lat: 6.4713679, lng: 3.295499, busNumber: [1, 10] },
    { name: '2nd Avenue', lat: 6.4626138, lng: 3.2860684, busNumber: [2, 20] },
    { name: '3rd Avenue', lat: 6.466900, lng: 3.283200, busNumber: [3, 30] },
    { name: '4th Avenue', lat: 6.468300, lng: 3.284700, busNumber: [4, 40] },
    { name: '5th Avenue', lat: 6.4676632429, lng: 3.27985839962, busNumber: [5, 50] },
    { name: '6th Avenue', lat: 6.4804574884, lng: 3.27769705630, busNumber: [6, 60] },
    { name: '7th Avenue', lat: 6.467512753692101, lng: 3.270667521483663, busNumber: [7, 70] },
    { name: 'Alakija Bus Stop', lat: 6.4600, lng: 3.3256, busNumber: [11, 110] },

    { name: '1st Close, 1st Avenue', lat: 6.465400, lng: 3.280500, busNumber: [1, 10] },
    { name: '2nd Close, 1st Avenue', lat: 6.467200, lng: 3.284500, busNumber: [1, 10] },
    { name: '3rd Close, 1st Avenue', lat: 6.467000, lng: 3.282800, busNumber: [1, 10] },

    { name: '23 Road', lat: 6.466735305275345, lng: 3.2762044664301766, busNumber: [1, 10] },
    { name: '23 Road, F Close', lat: 6.466150826607406,lng: 3.2772712574062433, busNumber: [1, 10] },
    { name: '23 Road, A Close', lat: 6.462151035552329,lng: 3.2771544752490014, busNumber: [1, 10] },
    { name: '23 Road, B Close', lat: 6.462835211067569,lng: 3.2768604349532096, busNumber: [1, 10] },
    { name: '23 Road, C Close', lat: 6.463685401543472,lng: 3.2770487513266624, busNumber: [1, 10] },
    { name: '23 Road, D Close', lat: 6.4644320344706205,lng: 3.276926279197272, busNumber: [1, 10] },
    { name: '23 Road, G Close', lat: 6.46696154808439,lng: 3.277190013550299, busNumber: [1, 10] },
    { name: '23 Road, H Close', lat: 6.467547432729718,lng: 3.27669987790448, busNumber: [1, 10] },
    { name: '23 Road, E Close', lat: 6.4653782801338915,lng: 3.2774453778486836, busNumber: [1, 10] },
    { name: '23 Road, I Close', lat: 6.469082051813972,lng: 3.2757774764013408, busNumber: [1, 10] },
    { name: '23 Road, J Close', lat: 6.469764785472494,lng: 3.2754613881927193, busNumber: [1, 10] },
    { name: '23 Road, L Close', lat: 6.471120344471686,lng: 3.2747700585855437, busNumber: [1, 10] },
    { name: '23 Road, R Close', lat: 6.473163969750313,lng: 3.2746936874647945, busNumber: [1, 10] },
    { name: '23 Road, S Close', lat: 6.4737161980321645,lng: 3.2746326425591037, busNumber: [1, 10] },
    { name: '23 Road, T Close', lat: 6.474046184132448,lng: 3.2750477723303417, busNumber: [1, 10] },
    { name: '23 Road, U Close', lat: 6.4744925111510705,lng: 3.2750711899062783, busNumber: [1, 10] },
    { name: '23 Road, V Close', lat: 6.474958757652746,lng: 3.275534594924324, busNumber: [1, 10] },
    { name: '23 Road, W Close', lat: 6.47558349935246,lng: 3.2753236318281074, busNumber: [1, 10] },

    { name: '51 Road', lat: 6.47558349935246,lng: 3.2753236318281074, busNumber: [1, 10] },

    { name: '52 Road', lat: 6.469165773657482,lng: 3.2778777951988074, busNumber: [1, 10] },
    { name: '22 Road', lat:  6.46970379892376,lng: 3.2820751979571967, busNumber: [1, 10] },

    { name: '24 Road', lat:  6.470025077163439,lng: 3.2732210733179725, busNumber: [1, 10] },

    { name: '1st Close, 2nd Avenue', lat: 6.4681, lng: 3.3261, busNumber: [2, 20] },
    { name: '2nd Close, 2nd Avenue', lat: 6.4683, lng: 3.3263, busNumber: [2, 20] },
    { name: '3rd Close, 2nd Avenue', lat: 6.4685, lng: 3.3266, busNumber: [2, 20] },

    { name: 'A.A Close, 7th Avenue', lat: 6.461362021510253,lng: 3.270362318400684, busNumber: [7, 70] },
    { name: 'A1 Close, 7th Avenue', lat: 6.462171096430604,lng: 3.270912870262337, busNumber: [7, 70] },
    { name: 'B1 Close, 7th Avenue', lat: 6.463077117870742,lng: 3.2705177984665346, busNumber: [7, 70] },
    { name: '73 Road, 7th Avenue', lat: 6.463839708091691,lng: 3.2711368721794316,  busNumber: [7, 70] },
    { name: '71 Road, 7th Avenue', lat: 6.4651299804203886,lng: 3.272660342726033,  busNumber: [7, 70] },
    { name: '72 Road, 7th Avenue', lat: 6.47041794945342,lng: 3.2710058019711554,  busNumber: [7, 70] },
    { name: 'G Close, 7th Avenue', lat: 6.466059584010875, lng: 3.2723178174673295,  busNumber: [7, 70] },
    { name: 'H Close, 7th Avenue', lat: 6.466755515663303,lng: 3.2719650675805845,  busNumber: [7, 70] },


    { name: 'Alakija Bus Stop', lat: 6.458255138945738, lng: 3.271819208258631, busNumber: [11, 37] },

  ];

  constructor() { }
  getBusStopsByNumber(busNumber: number): Bus[] {
    // Filter the bus stops to include those that contain the specified bus number
    return this.busStops.filter(busStop => busStop.busNumber.includes(busNumber));
  }

  getBusesByDestination(destination: string): Bus[] {
    // Filter the bus stops to match the specified destination name
    return this.busStops.filter(busStop => busStop.name.toLowerCase() === destination.toLowerCase());
  }


  
}

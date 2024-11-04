// src/app/services/route-data.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RouteDataService {
  private routeInstructionsSource = new BehaviorSubject<string[]>([]);
  private journeyDurationSource = new BehaviorSubject<string>('');

  routeInstructions$ = this.routeInstructionsSource.asObservable();
  journeyDuration$ = this.journeyDurationSource.asObservable();

  // Update the route instructions
  setRouteInstructions(instructions: string[]) {
    this.routeInstructionsSource.next(instructions);
  }

  // Update the journey duration
  setJourneyDuration(duration: string) {
    this.journeyDurationSource.next(duration);
  }
}

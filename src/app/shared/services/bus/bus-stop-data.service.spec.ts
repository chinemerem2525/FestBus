import { TestBed } from '@angular/core/testing';

import { BusStopDataService } from './bus-stop-data.service';

describe('BusStopDataService', () => {
  let service: BusStopDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BusStopDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

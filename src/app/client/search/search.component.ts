import { Component, OnInit } from '@angular/core';
import { BusStopService } from 'src/app/shared/services/bus/bus-stop.service';
import { Router, ActivatedRoute } from '@angular/router'; // Import Router and ActivatedRoute services
import { NotificationService } from 'src/app/shared/services/notification/notification.service';
import { LoaderService } from 'src/app/shared/services/loader/loader.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  query: string = '';
  fromInput: string = '';
  toInput: string = '';
  fromResults: string[] = [];
  toResults: string[] = [];
  travelDetails: { arrivalTime: string; dropOffTime: string; duration: string } | null = null;
  fromHistory: string[] = [];
  toHistory: string[] = [];
  activeInput: 'from' | 'to' = 'from'; // Track which input is active
  showHistory: boolean = true; // Control visibility of history

  constructor(
    private busStopService: BusStopService,
    private router: Router,
    private route: ActivatedRoute, // Inject ActivatedRoute
    private ns: NotificationService,
    private ls: LoaderService
  ) {}

  ngOnInit(): void {

    this.route.params.subscribe(params => {
            this.query = params['query'];
          });

    // Load search history from local storage
    if (typeof window !== 'undefined' && window.localStorage) {
      const fromHistory = JSON.parse(localStorage.getItem('fromHistory') || '[]');
      const toHistory = JSON.parse(localStorage.getItem('toHistory') || '[]');

      this.fromHistory = fromHistory; // Load "from" history
      this.toHistory = toHistory; // Load "to" history
    }

    // Retrieve 'q' query parameter and set it to 'fromInput'
    // this.route.queryParams.subscribe(params => {
    //   if (params['q']) {
    //     this.fromInput = params['q']; // Set 'fromInput' to the query value
    //   }
    // });

    // Ensure history is visible on load
    this.showHistory = this.fromHistory.length > 0 || this.toHistory.length > 0;
  }

  searchFrom(event: any) {
    const query = event.target.value;
    this.fromResults = this.busStopService.searchBusStops(query);
  }

  searchTo(event: any) {
    const query = event.target.value;
    this.toResults = this.busStopService.searchBusStops(query);
  }

  selectFrom(busStopName: string) {
    this.fromInput = busStopName;
    this.fromResults = [];
  }

  selectTo(busStopName: string) {
    this.toInput = busStopName;
    this.toResults = [];
  }

  submit() {
    // Handle the submission of the form with 'from' and 'to' inputs
    if (this.fromInput && this.toInput) {
      // console.log(From: ${this.fromInput}, To: ${this.toInput});

      // Calculate travel details
      this.calculateTravelDetails();

      // Save to history
      this.saveToHistory(this.fromInput, 'from');
      this.saveToHistory(this.toInput, 'to');

      // Hide history after search
      this.showHistory = false; // Hide history on search
    } else {
      console.log('Please select both from and to bus stops.');
      this.ns.showNotification('Please select both from and to bus stops.', 'error');
    }
  }

  calculateTravelDetails() {
    const fromCoords = this.busStopService.getBusStopCoordinates(this.fromInput);
    const toCoords = this.busStopService.getBusStopCoordinates(this.toInput);

    if (!fromCoords || !toCoords) {
      console.error('Invalid bus stop names or coordinates not found');
      this.ns.showNotification('Invalid bus stop names or coordinates not found', 'error');
      return;
    }

    // Set the average bus speed (km/h)
    const averageSpeed = 35; // You can adjust this based on real data

    // Get both distance and duration using the updated BusStopService method
    const { distance, duration } = this.busStopService.getDistanceAndDuration(fromCoords, toCoords, averageSpeed);

    // Get current time and calculate the drop-off time
    const currentDate = new Date();
    const arrivalTime = new Date(currentDate.getTime() + 10 * 60000 );
    const durationInMinutes = parseInt(duration.split(' ')[0], 10); // Extract the minutes
    const dropOffTime = new Date(arrivalTime.getTime() + durationInMinutes * 60 * 1000);

    // Format the times
    this.travelDetails = {
      arrivalTime: this.formatTime(arrivalTime),
      dropOffTime: this.formatTime(dropOffTime),
      duration, // Already formatted in minutes
    };
  }

  formatTime(date: Date): string {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }

  saveToHistory(input: string, type: 'from' | 'to') {
    // Save to the appropriate history based on input type
    if (type === 'from') {
      if (!this.fromHistory.includes(input)) {
        this.fromHistory.push(input);
        localStorage.setItem('fromHistory', JSON.stringify(this.fromHistory));
      }
    } else if (type === 'to') {
      if (!this.toHistory.includes(input)) {
        this.toHistory.push(input);
        localStorage.setItem('toHistory', JSON.stringify(this.toHistory));
      }
    }
  }

  useHistory(busStopName: string) {
    // Use history based on active input
    if (this.activeInput === 'from') {
      this.fromInput = busStopName;
      this.fromResults = []; // Clear fromResults on history selection
    } else {
      this.toInput = busStopName;
      this.toResults = []; // Clear toResults on history selection
    }
    this.showHistory = false; // Hide history after selection
  }

  setActiveInput(input: 'from' | 'to') {
    this.activeInput = input; // Set the active input based on the focus
    this.showHistory = true; // Show history when input is focused
  }

  // New method to navigate to route page with query parameters
  navigateToRoute() {
    this.ls.showLoader();
    if (this.travelDetails) {
      this.router.navigate(['/route'], {
        queryParams: {
          from: this.fromInput,
          to: this.toInput,
          arrivalTime: this.travelDetails.arrivalTime,
          dropOffTime: this.travelDetails.dropOffTime,
          duration: this.travelDetails.duration,
        },
      });
    }
  }
}

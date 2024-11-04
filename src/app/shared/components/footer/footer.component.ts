import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LoaderService } from '../../services/loader/loader.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {


  constructor(private router: Router, private loaderService: LoaderService) { }

  ngOnInit(): void {
  }

  navigateToRoute() {
    this.loaderService.showLoader();
    this.router.navigate(['/route'])
  }

  navigateToSearch() {
    this.loaderService.showLoader();
    this.router.navigate(['/search'])
  }

  navigateToBuses() {
    this.loaderService.showLoader();
    this.router.navigate(['/buses'])
  }

  navigateToHome() {
    this.loaderService.showLoader();
    this.router.navigate(['/'])
  }

  navigateToReport() {
    this.loaderService.showLoader();
    this.router.navigate(['/report'])
  }


}

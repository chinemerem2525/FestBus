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
    this.router.navigate(['/route']).then(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  navigateToSearch(bookmarkId: string) {
    this.loaderService.showLoader();
    this.router.navigate(['/search']).then(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  navigateToBuses() {
    this.loaderService.showLoader();
    this.router.navigate(['/buses']).then(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  navigateToHome() {
    this.loaderService.showLoader();
    this.router.navigate(['/']).then(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  navigateToReport() {
    this.loaderService.showLoader();
    this.router.navigate(['/report']).then(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }


}

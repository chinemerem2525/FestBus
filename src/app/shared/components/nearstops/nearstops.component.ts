import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../../services/loader/loader.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nearstops',
  templateUrl: './nearstops.component.html',
  styleUrls: ['./nearstops.component.css']
})
export class NearstopsComponent implements OnInit {

  constructor(private router: Router, private ls: LoaderService) { }

  ngOnInit(): void {
  }

  navigateToAvenueLoader() {
    this.ls.showLoader();
  }

}

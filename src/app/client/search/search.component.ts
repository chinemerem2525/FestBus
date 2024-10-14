import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  // Boolean to track div visibility
  isDivVisible: boolean = false;

  query: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.query = params['query'];
    });
  }

  showSearchResult(): void {
    this.isDivVisible = !this.isDivVisible;
  }
}

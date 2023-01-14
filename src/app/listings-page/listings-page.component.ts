import { Listing } from './../types';
import { Component } from '@angular/core';
import { fakeListings } from '../fake-data';

@Component({
  selector: 'app-listings-page',
  templateUrl: './listings-page.component.html',
  styleUrls: ['./listings-page.component.css'],
})
export class ListingsPageComponent {
  listings: Listing[] = [];

  constructor() {}

  ngOnInit(): void {
    this.listings = fakeListings;
  }
}

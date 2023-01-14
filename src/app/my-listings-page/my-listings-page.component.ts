import { Listing } from './../types';
import { Component } from '@angular/core';
import { fakeMyListings } from '../fake-data';

@Component({
  selector: 'app-my-listings-page',
  templateUrl: './my-listings-page.component.html',
  styleUrls: ['./my-listings-page.component.css'],
})
export class MyListingsPageComponent {
  listings: Listing[] = [];

  constructor() {}

  ngOnInit() {
    this.listings = fakeMyListings;
  }

  onDeleteClicked(ListingId: string): void {
    alert(`Deleting your listing with id ${ListingId}`);
  }
}

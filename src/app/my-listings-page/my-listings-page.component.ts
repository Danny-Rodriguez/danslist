// import { ListingsService } from './../listings.service';
import { Listing } from './../types';
import { Component } from '@angular/core';
import { ListingsService } from '../listings.service';

@Component({
  selector: 'app-my-listings-page',
  templateUrl: './my-listings-page.component.html',
  styleUrls: ['./my-listings-page.component.css'],
})
export class MyListingsPageComponent {
  listings: Listing[] = [];

  constructor(private ListingsService: ListingsService) {}

  ngOnInit() {
    this.ListingsService.getListingsForUser().subscribe(
      (listings) => (this.listings = listings)
    );
  }

  onDeleteClicked(ListingId: string): void {
    this.ListingsService.deleteListing(ListingId).subscribe(() => {
      this.listings = this.listings.filter(
        (listing) => listing.id !== ListingId
      );
    });
  }
}

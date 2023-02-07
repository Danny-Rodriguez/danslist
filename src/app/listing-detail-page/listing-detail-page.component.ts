// import { ListingsService } from './../listings.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListingsService } from '../listings.service';
import { Listing } from '../types';

@Component({
  selector: 'app-listing-detail-page',
  templateUrl: './listing-detail-page.component.html',
  styleUrls: ['./listing-detail-page.component.css'],
})
export class ListingDetailPageComponent implements OnInit {
  isLoading: boolean = true;
  listing: Listing | any;

  constructor(
    private route: ActivatedRoute,
    private ListingsService: ListingsService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.ListingsService.getListingById(id).subscribe((listing) => {
      this.listing = listing;
      this.isLoading = false;
    });
    this.ListingsService.addViewToListing(id).subscribe(() =>
      console.log('Views Updated')
    );
  }
}

// import { Listing } from './../types';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Listing } from '../types';
import { ListingsService } from '../listings.service';
import { fakeListings } from '../fake-data';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css'],
})
//**undefined if not any */
export class ContactPageComponent {
  email: string = '';
  message: string = '';
  listing: Listing | any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private ListingsService: ListingsService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.ListingsService.getListingById(id).subscribe((listing) => {
      this.listing = listing;
      this.message = `Hi, I'm interested in your ${this.listing?.name.toLocaleLowerCase()}!`;
    });
  }

  sendMessage(): void {
    alert('Your message has been sent!');
    this.router.navigateByUrl('/listings');
  }
}

import { Component, OnInit } from '@angular/core';
import { SeoService } from 'src/app/core/services/seo.service';

const meta = {
  title: 'SBSC | Thank You',
  description: 'Thanks for shopping with us, we hope to see you around again',
};

@Component({
  selector: 'app-thank-you',
  templateUrl: './thank-you.component.html',
  styleUrls: ['./thank-you.component.scss'],
})
export class ThankYouComponent implements OnInit {
  constructor(private seo: SeoService) {
    this.seo.setMetaTags(meta);
  }

  context = {
    name: 'Samuel',
  };

  ngOnInit(): void {
    // (<any>window)['dataLayer'] = (<any>window)['dataLayer'] || [];
    // (<any>window)['dataLayer'].push({ event: 'purchase', ecommerce: null });
    // (<any>window)['dataLayer'].push({
    //   event: 'purchase',
    //   ecommerce: {
    //     transaction_id: 'T_12345_3',
    //     value: 25.42,
    //     tax: 4.9,
    //     shipping: 5.99,
    //     currency: 'USD',
    //     items: [
    //       {
    //         item_id: 'SKU_12345',
    //         item_name: 'Stan and Friends Tee',
    //         affiliation: 'Google Merchandise Store',
    //         price: 9.99,
    //         quantity: 1,
    //       },
    //     ],
    //   },
    // });
  }
}

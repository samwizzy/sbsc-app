import { Component, OnInit } from '@angular/core';
import { SeoService } from 'src/app/core/services/seo.service';

declare var gtag: Function;
declare var dataLayer: any[];

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

    dataLayer = dataLayer || [];
    dataLayer.push({ event: 'purchase', ecommerce: null });
    dataLayer.push({
      event: 'purchase',
      ecommerce: {
        transaction_id: 'T_12345_3',
        value: 25.42,
        tax: 4.9,
        shipping: 5.99,
        currency: 'USD',
        coupon: 'SUMMER_SALE',
        items: [
          {
            item_id: 'SKU_12345',
            item_name: 'Stan and Friends Tee',
            affiliation: 'Google Merchandise Store',
            coupon: 'SUMMER_FUN',
            discount: 2.22,
            index: 0,
            item_brand: 'Google',
            item_category: 'Apparel',
            item_category2: 'Adult',
            item_category3: 'Shirts',
            item_category4: 'Crew',
            item_category5: 'Short sleeve',
            item_list_id: 'related_products',
            item_list_name: 'Related Products',
            item_variant: 'green',
            location_id: 'ChIJIQBpAG2ahYAR_6128GcTUEo',
            price: 9.99,
            quantity: 1,
          },
        ],
      },
    });
  }

  ngOnInit(): void {}
}

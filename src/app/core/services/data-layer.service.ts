import { Injectable } from '@angular/core';
import { Product } from '../models/product';

declare var gtag: Function;

@Injectable({
  providedIn: 'root',
})
export class DataLayerService {
  private window = <any>window;

  constructor() {
    this.window = [];
  }

  private triggerEvent(eventName: string, obj: {}) {
    if (obj) gtag('event', eventName, obj);
  }

  logEvent(item: Product) {
    const ecommerce = {
      transaction_id: 'T_12345_3',
      value: item.price,
      tax: 4.9,
      shipping: 5.99,
      currency: 'USD',
      items: [
        {
          item_id: 'SKU_12345',
          item_name: 'Stan and Friends Tee',
          affiliation: 'Google Merchandise Store',
          price: 9.99,
          quantity: 1,
        },
      ],
    };

    this.triggerEvent('purchase', ecommerce);
  }
}

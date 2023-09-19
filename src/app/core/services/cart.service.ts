import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { Prod } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart = new BehaviorSubject<any[]>([]);
  cartOb = this.cart.asObservable();
  private cartCount = new BehaviorSubject<number>(0);
  cartCountOb = this.cartCount.asObservable();

  constructor() {}

  addToCart(item: Prod) {
    const prevCart = this.cart.getValue();
    prevCart.push(item);
    this.cart.next(prevCart);
    this.cartCount.next(prevCart.length);
  }

  generateItems() {
    return this.cart.pipe(
      map((data) => {
        return data.map((item) => {
          return {
            item_id: item.id,
            item_name: item.title,
            price: item.price.toFixed(2),
            quantity: 1,
          };
        });
      })
    );
  }
}

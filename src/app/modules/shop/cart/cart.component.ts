import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription, map, tap } from 'rxjs';
import { Prod } from 'src/app/core/models/product';
import { CartService } from 'src/app/core/services/cart.service';

declare let gtag: Function;

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  cartList: Observable<Prod[]> = this.cartService.cartOb;
  subscription = new Subscription();

  constructor(private router: Router, private cartService: CartService) {}

  proceedToCheckout() {
    let items: any[] = [];

    this.subscription.add(
      this.cartList
        .pipe(
          tap((data) => {
            data.map((item) => {
              items.push({
                item_id: item.id,
                item_name: item.title,
                price: item.price.toFixed(2),
                quantity: 1,
              });
            });
          })
        )
        .subscribe()
    );

    console.log(items, 'items');

    gtag('event', 'begin_checkout', {
      currency: 'USD',
      value: 5.8,
      items: items,
    });

    this.router.navigate(['shop/shipping']);
  }
}

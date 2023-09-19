import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
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
    this.subscription.add(
      this.cartService.generateItems().subscribe((items) => {
        gtag('event', 'begin_checkout', {
          currency: 'USD',
          value: 5.8,
          items: items,
        });

        this.router.navigate(['shop/shipping']);
      })
    );
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
}

import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { CartService } from 'src/app/core/services/cart.service';

declare let gtag: Function;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  cartCount: Observable<number> = this.cartService.cartCountOb;
  subscription = new Subscription();

  constructor(
    private cartService: CartService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  viewCart() {
    this.subscription.add(
      this.cartService.generateItems().subscribe((items) => {
        gtag('event', 'view_cart', {
          currency: 'USD',
          value: 5.8,
          items: items,
        });

        this.router.navigate(['cart'], { relativeTo: this.route });
      })
    );
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
}

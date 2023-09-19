import { Component, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Prod } from 'src/app/core/models/product';
import { CartService } from 'src/app/core/services/cart.service';
import { ProductService } from 'src/app/core/services/product.service';

declare let gtag: Function;

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss'],
})
export class ProductViewComponent {
  product!: Prod;
  productId!: number;

  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe((param: Params) => {
      this.productId = param['id'];
      this.productService.getProductById(this.productId).subscribe((response) => {
        this.product = response;
      });
    });
  }

  addToCart(product: Prod) {
    gtag('event', 'add_to_cart', {
      currency: 'NGN',
      value: 5.8,
      items: [
        {
          item_id: product.id,
          item_name: product.title,
          price: product.price.toFixed(2),
          quantity: 1,
        },
      ],
    });

    this.cartService.addToCart(product);
  }
}

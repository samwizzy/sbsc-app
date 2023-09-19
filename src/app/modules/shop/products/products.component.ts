import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Prod } from 'src/app/core/models/product';
import { ProductService } from 'src/app/core/services/product.service';

declare let gtag: Function;

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  products: Observable<Prod[]> = this.productService.getAllProduct();

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  selectItem(product: Prod) {
    gtag('event', 'select_item', {
      items: [
        {
          item_id: product.id,
          item_name: product.title,
          price: product.price.toFixed(2),
          quantity: 1,
        },
      ],
    });

    this.router.navigate([product.id], { relativeTo: this.route });
  }
}

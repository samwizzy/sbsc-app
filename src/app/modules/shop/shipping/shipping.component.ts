import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subscription, map } from 'rxjs';
import { Prod } from 'src/app/core/models/product';
import { CartService } from 'src/app/core/services/cart.service';
import { ShippingService } from 'src/app/core/services/shipping.service';
import { v4 as uuidv4 } from 'uuid';

declare let gtag: Function;

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.scss'],
})
export class ShippingComponent {
  form!: FormGroup;
  countries: Observable<any[]> = this.shippingService.getCountries();
  cartList: Observable<Prod[]> = this.cartService.cartOb;
  subscription = new Subscription();

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private shippingService: ShippingService,
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.createForm();
  }

  get controls() {
    return this.form.controls;
  }

  createForm() {
    this.form = this.fb.group({
      firstName: ['John', Validators.required],
      lastName: ['Doe', Validators.required],
      email: ['test@gmail.com', Validators.required],
      street: this.fb.control('No 1 Lawal', Validators.required),
      city: ['Eti-osa', Validators.required],
      state: ['Lagos', Validators.required],
      country: ['Nigeria', Validators.required],
      zipCode: ['12345', Validators.required],
      phone: ['09080008000', Validators.required],
    });
  }

  randomId(length = 6) {
    return Math.random()
      .toString(36)
      .substring(2, length + 2);
  }

  onSubmit() {
    this.subscription.add(
      this.generateItems().subscribe((items) => {
        gtag('event', 'purchase', {
          transaction_id: uuidv4(),
          value: 5.8,
          currency: 'USD',
          items: items,
        });

        this.router.navigate(['thankyou']);
      })
    );
  }

  generateItems() {
    return this.cartList.pipe(
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

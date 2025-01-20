import { Component, HostListener } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject, Observable, switchMap } from 'rxjs';
import { Prod } from 'src/app/core/models/product';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-refresh-on-save',
  templateUrl: './refresh-on-save.component.html',
  styleUrls: ['./refresh-on-save.component.scss'],
})
export class RefreshOnSaveComponent {
  displayState = 1;
  form!: FormGroup;
  update$ = new BehaviorSubject(false);

  products$: Observable<Prod[]> = this.getProducts();
  categories = ['Men', 'Women', 'Boys', 'Girls', 'Toys', 'Electronics', 'Shoes'];

  @HostListener('window:scroll', ['$event']) onScroll(event: Event) {
    console.log(event);
  }

  constructor(private fb: FormBuilder, private productService: ProductService) {
    this.form = this.fb.group({
      title: [null, Validators.required],
      description: [null],
      image: [''],
      category: [null, Validators.required],
      price: [null, Validators.required],
    });
  }

  onclick() {
    this.update$.next(true);
  }

  getProducts() {
    return this.update$.pipe(switchMap(() => this.productService.getAllProduct()));
  }

  createProduct() {
    const data = { ...this.form.value };

    this.productService.createProduct(data).subscribe({
      next: (response) => {
        this.update$.next(true);
        this.displayState = 1;
      },
    });
  }
}

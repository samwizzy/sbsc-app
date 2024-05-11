import { Component, inject } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { productsSelector } from 'src/app/store/product/selectors';
import { AppState } from 'src/app/store/rootReducers';
import * as productActions from 'src/app/store/product/actions';
import { Product } from 'src/app/core/models/product';

@Component({
  selector: 'app-sticky',
  templateUrl: './sticky.component.html',
  styleUrls: ['./sticky.component.scss'],
})
export class StickyComponent {
  items$!: Observable<Product[]>;
  firestore: Firestore = inject(Firestore);

  ngOnInit() {
    this.store.dispatch(productActions.getProducts());

    // two ways to get selectors
    let p1 = this.store.select(productsSelector);
    this.items$ = this.store.pipe(select(productsSelector));

    this.store.pipe(select(productsSelector)).subscribe((products) => {
      console.log('Products has been fetched', products);
    });
  }

  constructor(private store: Store<AppState>) {}
}

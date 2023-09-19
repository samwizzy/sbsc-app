import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as productActions from './actions';
import { catchError, map, mergeMap, of } from 'rxjs';
import { ProductService } from 'src/app/core/services/product.service';

@Injectable()
export class ProductEffects {
  getProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(productActions.getProducts),
      mergeMap(() => {
        return this.productService.fetchProducts().pipe(
          map((products) => {
            return {
              type: '[Product] Get products success',
              payload: products,
            };
          }),
          // map((products) => productActions.getProductsSuccess({ payload: products })),
          catchError((error) => of(productActions.getProductsError(error.message)))
        );
      })
    )
  );

  constructor(private actions$: Actions, private productService: ProductService) {}
}

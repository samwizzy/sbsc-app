import { createAction, props } from '@ngrx/store';
import { Product } from 'src/app/core/models/product';

export const isLoading = createAction('[Product] Loading');

export const getProducts = createAction('[Product] Get products');

export const getProductsSuccess = createAction(
  '[Product] Get products success',
  props<{ payload: Product[] }>()
);

export const getProductsError = createAction(
  '[Product] Get products error',
  props<{ error: string }>()
);

export const getProduct = createAction('[Product] Get product', props<{ product: Product }>());

export const deleteProduct = createAction(
  '[Product] Delete product',
  props<{ productId: number }>()
);

export const createProduct = createAction(
  '[Product] Create product',
  props<{ product: Product }>()
);

export const testProductError = createAction('[Product] Test product Error', props<any>());

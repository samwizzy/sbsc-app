import { createReducer, on } from '@ngrx/store';
import { Product } from 'src/app/core/models/product';
import * as productActions from './actions';

export type State = {
  loading: boolean;
  products: Product[];
  product: Product | null;
  error: string;
};

export const initialState: State = {
  loading: false,
  products: [],
  product: null,
  error: '',
};

export const reducer = createReducer(
  initialState,
  on(productActions.isLoading, (state) => ({ ...state, loading: true })),

  on(productActions.getProducts, (state) => ({
    ...state,
    loading: true,
  })),

  on(productActions.getProductsSuccess, (state, action) => ({
    ...state,
    products: action.payload,
    loading: false,
  })),

  on(productActions.getProductsError, (state, action) => ({
    ...state,
    error: action.error,
    loading: false,
  })),

  on(productActions.getProduct, (state, action) => ({
    ...state,
    product: action.product,
    loading: false,
  })),

  on(productActions.deleteProduct, (state) => ({ ...state, loading: false })),

  on(productActions.createProduct, (state, action) => ({ ...state, loading: false })),

  on(productActions.testProductError, (state, action) => {
    console.log('you trigger me');
    return { ...state, loading: false };
  })
);

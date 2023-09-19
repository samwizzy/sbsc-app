import * as fromProduct from './product/reducers';
export interface AppState {
  product: fromProduct.State;
}

export const appReducers = {
  product: fromProduct.reducer,
};

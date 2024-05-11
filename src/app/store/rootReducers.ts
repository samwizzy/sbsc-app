import { ActionReducerMap } from '@ngrx/store';
import * as fromProduct from './product/reducers';

export interface AppState {
  product: fromProduct.State;
}

export const appReducers: ActionReducerMap<AppState> = {
  product: fromProduct.reducer,
};

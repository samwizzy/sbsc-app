import { createSelector } from '@ngrx/store';
import { AppState } from '../rootReducers';

const selectedFeature = (state: AppState) => state.product;

export const isLoadingSelector = createSelector(selectedFeature, (state) => state.loading);

export const productsSelector = createSelector(selectedFeature, (state) => state.products);

export const productSelector = createSelector(selectedFeature, (state) => state.product);

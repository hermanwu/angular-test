import * as fromRoot from '../../shared/app.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface State extends fromRoot.State {
  products: ProductState;
}

export interface ProductState {
  apps: any[];
}

// this makes code more predictable
const initialState: ProductState = {
  apps: [],
};

const getProductAppState = createFeatureSelector<ProductState>('applications');

export const getAppsList = createSelector(
  getProductAppState,
  state => state.apps
);

export function reducer(state = initialState, action) {
  console.log(action);
  console.log(state);
  switch (action.type) {
    case 'SHOW_APP':
      return {
        ...state,
        apps: action.payload,
      };

    default:
      return state;
  }
}

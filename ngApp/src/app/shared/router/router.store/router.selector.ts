import { createFeatureSelector, State } from '@ngrx/store';
import * as fromRouter from '@ngrx/router-store';
import { RouterState } from './router.state';
import { RouterStateUrl } from '../router.model/router-state-url.model';

const selectRouter = createFeatureSelector<
  RouterState,
  fromRouter.RouterReducerState<any>
>('router');

export const {
  selectUrl, // select the current url
} = fromRouter.getSelectors(selectRouter);

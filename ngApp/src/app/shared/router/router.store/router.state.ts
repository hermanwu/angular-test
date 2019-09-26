import * as fromRouter from '@ngrx/router-store';
import { RouterStateUrl } from '../router.model/router-state-url.model';

export interface RouterState {
  router: fromRouter.RouterReducerState<RouterStateUrl>;
}

import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { routerReducer } from '@ngrx/router-store';
import { storeFreeze } from 'ngrx-store-freeze';

import * as fromAuth from '../core/auth/store/auth.reducers';
import * as fromUsers from './users/users.reducers';
import { environment } from '../../environments/environment';

export interface AppState {
  router: {};
  activeUser: fromAuth.State;
  users: fromUsers.State;
}

export const reducers: ActionReducerMap<AppState> = {
  router: routerReducer,
  activeUser: fromAuth.authReducer,
  users: fromUsers.usersReducer
};

export const metaReducers: MetaReducer<AppState>[] =
  !environment.production ? [storeFreeze] : [];

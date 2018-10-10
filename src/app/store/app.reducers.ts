import { ActionReducerMap } from '@ngrx/store';

import * as fromAuth from '../core/auth/store/auth.reducers';
import * as fromUsers from './users/users.reducers';

export interface AppState {
  activeUser: fromAuth.State;
  users: fromUsers.State;
}

export const reducers: ActionReducerMap<AppState> = {
  activeUser: fromAuth.authReducer,
  users: fromUsers.usersReducer
};

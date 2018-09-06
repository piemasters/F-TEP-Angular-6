import { ActionReducerMap } from '@ngrx/store';

import * as fromUser from '../modules/user-account/store/user.reducers';

export interface AppState {
  activeUser: fromUser.State;
}

export const reducers: ActionReducerMap<AppState> = {
  activeUser: fromUser.activeUserReducer
};

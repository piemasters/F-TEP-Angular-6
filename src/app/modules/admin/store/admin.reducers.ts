import * as fromAdmin from '../../../store/app.reducers';
import * as  AdminActions from './admin.actions';

export interface FeatureState extends fromAdmin.AppState {
  userBalance;
  userRole;
  coins;
}

export interface State {
  userBalance;
  userRole;
  coins;
}

const initialState: State = {
  userBalance: null,
  userRole: null,
  coins: 0
};

export function adminReducer(state = initialState, action: AdminActions.AdminActions) {
  switch (action.type) {
    case AdminActions.ENDORSE_COINS:
      return {
        ...state,
        userBalance: action.payload
      };
    case AdminActions.SET_USER_ROLE:
      return {
        ...state,
        userRole: action.payload
      };
    default:
      return state;
  }
}

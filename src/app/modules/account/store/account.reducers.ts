import { Wallet } from '../../../shared/models/wallet.model';
import * as AccountActions from './account.actions';
import * as fromAuth from '../../../store/app.reducers';

export interface FeatureState extends fromAuth.AppState {
  userWallet: Wallet;
}

export interface State {
  userWallet: Wallet;
}

const initialState: State = {
  userWallet: new Wallet(0, [])
};

export function userReducer(state = initialState, action: AccountActions.AccountActions) {
  switch (action.type) {
    case AccountActions.SET_WALLET:
      return {
        ...state,
        userWallet: action.payload
      };
    default:
      return state;
  }
}

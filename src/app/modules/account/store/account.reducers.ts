import { Wallet } from '../../../shared/models/wallet.model';
import * as AccountActions from './account.actions';
import * as fromAuth from '../../../store/app.reducers';
import { User } from '../../../shared/models/user.model';

export interface FeatureState extends fromAuth.AppState {
  userWallet: Wallet;
}

export interface State {
  userWallet: Wallet;
}

const initialState: State = {
  userWallet: new Wallet(0, {
    owner:  new User('Test User', 'GUEST', 'test.user@example.com', 1),
    transactions:  [
      {
        owner: new User('Test User', 'GUEST', 'test.user@example.com', 1),
        associatedId: 628,
        balanceChange: 5,
        transactionTime: '2017-06-09T13:30:51.544',
        type: 'JOB',
        id: 1
      },
      {
        owner: new User('Test User', 'GUEST', 'test.user@example.com', 1),
        balanceChange: -5,
        transactionTime: '2017-06-09T13:30:51.544',
        type: 'DOWNLOAD',
        id: 2
      }
    ]
  })
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

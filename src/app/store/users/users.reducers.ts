import { Wallet } from '../../shared/models/wallet.model';
import * as UsersActions from './users.actions';
import { User } from '../../shared/models/user.model';

export interface State {
  userWallet: Wallet;
  selectedUser: User;
  userList: User[];
  userLinks: {};
  userPage: {};
  userSearch: {};
}

const initialState: State = {
  userWallet: new Wallet(
    0,
    new User(1, 'Test User', 'GUEST', 'test.user@example.com', 1),
    [
      {
        owner: new User(1, 'Test User', 'GUEST', 'test.user@example.com', 1),
        associatedId: 628,
        balanceChange: 5,
        transactionTime: '2017-06-09T13:30:51.544',
        type: 'JOB',
        id: 1
      },
      {
        owner: new User(1, 'Test User', 'GUEST', 'test.user@example.com', 1),
        balanceChange: -5,
        transactionTime: '2017-06-09T13:30:51.544',
        type: 'DOWNLOAD',
        id: 2
      }
    ]
  ),
  selectedUser: new User(1, 'Test User', 'GUEST', 'test.user@example.com', 1),
  userList: [
    new User(1, 'Test User', 'GUEST', 'test.user@example.com', 1),
    new User(1, 'Second User', 'GUEST', 'test2.user@example.com', 2)
  ],
  userLinks: {},
  userPage: { size: 20, totalElements: 2, totalPages: 1, number: 0 },
  userSearch: { filter: '', sort: 'name'}
};

export function usersReducer(state = initialState, action: UsersActions.UsersActions) {
  // console.log(action.type);
  // console.log(action);
  switch (action.type) {
    case UsersActions.SET_USER:
      return {
        ...state,
        selectedUser: action.payload
      };
    case UsersActions.SET_WALLET:
      console.log('wallet reducer');
      return {
        ...state,
        userWallet: action.payload
      };
    case UsersActions.SET_USER_LIST:
      return {
        ...state,
        userList: action.payload._embedded.users,
        userLinks: action.payload._links,
        userPage: action.payload.page
      };
    case UsersActions.SET_USER_PAGE:
      return {
        ...state,
        userPage: { ...state, number: action.payload }
      };
    case UsersActions.SET_USER_SEARCH:
      return {
        ...state,
        userSearch: { ...state, filter: action.payload.filter, sort: action.payload.sort }
      };
    default:
      return state;
  }
}

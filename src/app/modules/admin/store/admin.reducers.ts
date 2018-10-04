import * as fromAdmin from '../../../store/app.reducers';
import { User } from '../../../shared/models/user.model';
import * as  AdminActions from './admin.actions';

export interface FeatureState extends fromAdmin.AppState {
  userList: User[];
  userLinks: {};
  userPage: {};
  userSearch: {};
}

export interface State {
  userList: User[];
  userLinks: {};
  userPage: {};
  userSearch: {};
}

const initialState: State = {
  userList: [
    new User('Test User', 'GUEST', 'test.user@example.com', 1),
    new User('Second User', 'GUEST', 'test2.user@example.com', 2)
  ],
  userLinks: {},
  userPage: { size: 20, totalElements: 2, totalPages: 1, number: 0 },
  userSearch: { filter: '', sort: 'name'}
};

export function adminReducer(state = initialState, action: AdminActions.AdminActions) {
  switch (action.type) {
    case AdminActions.SET_USER_LIST:
      return {
        ...state,
        userList: action.payload._embedded.users,
        userLinks: action.payload._links,
        userPage: action.payload.page
      };
    case AdminActions.SET_USER_PAGE:
      return {
        ...state,
        userPage: { ...state, number: action.payload }
      };
    case AdminActions.SET_USER_SEARCH:
      return {
        ...state,
        userSearch: { ...state, filter: action.payload.filter, sort: action.payload.sort }
      };
    default:
      return state;
  }
}

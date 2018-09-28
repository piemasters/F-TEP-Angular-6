import * as fromAdmin from '../../../store/app.reducers';
import { User } from '../../../shared/models/user.model';
import * as  AdminActions from './admin.actions';

export interface FeatureState extends fromAdmin.AppState {
  userList: User[];
  userLinks: {};
  userPage: {};
  userSearchFilter: string;
}

export interface State {
  userList: User[];
  userLinks: {};
  userPage: {};
  userSearchFilter: string;
}

const initialState: State = {
  userList: [
    new User('Test User', 'GUEST', 'test.user@example.com', 1),
    new User('Second User', 'GUEST', 'test2.user@example.com', 2)
  ],
  userLinks: {},
  userPage: {},
  userSearchFilter: ''
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
    default:
      return state;
  }
}

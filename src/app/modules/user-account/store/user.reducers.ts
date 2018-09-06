import { User } from '../user.model';
import * as UserActions from './user.actions';
import * as fromApp from '../../../store/app.reducers';


export interface FeatureState extends fromApp.AppState {
  activeUser: State;
}

export interface State {
  activeUser: User;
}

const initialState: State = {
  activeUser: new User('Test User', 'GUEST', 'test.user@example.com', 1)
};

export function activeUserReducer(state = initialState, action: UserActions.UserActions) {
  switch (action.type) {
    case UserActions.SET_ACTIVE_USER:
      return {
        ...state,
        activeUser: action.payload
      };
    default:
      return state;
  }
}

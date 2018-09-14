import { Action } from '@ngrx/store';

export const SET_USER_LIST = 'SET_USER_LIST';
export const FETCH_USER_LIST = 'FETCH_USER_LIST';

export class SetUserList implements Action {
  readonly type = SET_USER_LIST;

  constructor(public payload) {}
}

export class FetchUserList implements Action {
  readonly type = FETCH_USER_LIST;
}

export type AdminActions = SetUserList |  FetchUserList;

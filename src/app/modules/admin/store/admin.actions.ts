import { Action } from '@ngrx/store';

export const SET_USER_LIST = 'SET_USER_LIST';
export const FETCH_USER_LIST = 'FETCH_USER_LIST';
export const SET_USER_PAGE = 'SET_USER_PAGE';
export const SET_USER_SEARCH = 'SET_USER_SEARCH';

export class SetUserList implements Action {
  readonly type = SET_USER_LIST;

  constructor(public payload) {}
}

export class FetchUserList implements Action {
  readonly type = FETCH_USER_LIST;
}

export class SetUserPage implements Action {
  readonly type = SET_USER_PAGE;

  constructor(public payload: { page: number }) {}
}

export class SetUserSearch implements Action {
  readonly type = SET_USER_SEARCH;

  constructor(public payload: { filter: string, sort: number }) {}
}

export type AdminActions = SetUserList | FetchUserList | SetUserPage | SetUserSearch;

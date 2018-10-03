import { Action } from '@ngrx/store';

export const SET_USER_LIST = 'SET_USER_LIST';
export const FETCH_USER_LIST = 'FETCH_USER_LIST';
export const SET_USER_FILTER = 'SET_USER_FILTER';
export const FETCH_USER_FILTERED_LIST = 'FETCH_USER_FILTERED_LIST';
export const SET_USER_PAGE = 'SET_USER_PAGE';

export class SetUserList implements Action {
  readonly type = SET_USER_LIST;

  constructor(public payload) {}
}

export class SetUserFilter implements Action {
  readonly type = SET_USER_FILTER;

  constructor(public filter) {}
}

export class FetchUserList implements Action {
  readonly type = FETCH_USER_LIST;
}

export class FetchUserFilteredList implements Action {
  readonly type = FETCH_USER_FILTERED_LIST;
}

export class SetUserPage implements Action {
  readonly type = SET_USER_PAGE;

  constructor(public payload: {page: number}) {}
}

export type AdminActions = SetUserList |  FetchUserList | SetUserFilter | FetchUserFilteredList | SetUserPage;

import { Action } from '@ngrx/store';

import { Wallet } from '../../shared/models/wallet.model';
import { User } from '../../shared/models/user.model';

export const SET_USER = 'SET_USER';
export const FETCH_USER = 'FETCH_USER';
export const SET_WALLET = 'SET_WALLET';
export const FETCH_WALLET = 'FETCH_WALLET';
export const SET_USER_LIST = 'SET_USER_LIST';
export const FETCH_USER_LIST = 'FETCH_USER_LIST';
export const SET_USER_PAGE = 'SET_USER_PAGE';
export const SET_USER_SEARCH = 'SET_USER_SEARCH';

export class SetUser implements Action {
  readonly type = SET_USER;

  constructor(public payload: User) {}
}

export class FetchUser implements Action {
  readonly type = FETCH_USER;
}

export class SetWallet implements Action {
  readonly type = SET_WALLET;

  constructor(public payload: Wallet) {}
}

export class FetchWallet implements Action {
  readonly type = FETCH_WALLET;
}

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

export type UsersActions = SetUser | FetchUser | SetWallet |  FetchWallet | SetUserList | FetchUserList | SetUserPage | SetUserSearch;

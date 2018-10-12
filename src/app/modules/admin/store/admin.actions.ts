import { Action } from '@ngrx/store';


export const ENDORSE_COINS = 'ENDORSE_COINS';
export const SET_USER_ROLE = 'SET_USER_ROLE';

export class EndorseCoins implements Action {
  readonly type = ENDORSE_COINS;

  constructor(public payload) {}
}

export class SetUserRole implements Action {
  readonly type = SET_USER_ROLE;

  constructor(public payload) {}
}


export type AdminActions = EndorseCoins | SetUserRole;

import { Action } from '@ngrx/store';

import { Wallet } from '../../../shared/models/wallet.model';

export const SET_WALLET = 'SET_WALLET';
export const FETCH_WALLET = 'FETCH_WALLET';

export class SetWallet implements Action {
  readonly type = SET_WALLET;

  constructor(public payload: Wallet) {}
}

export class FetchWallet implements Action {
  readonly type = FETCH_WALLET;
}

export type AccountActions = SetWallet |  FetchWallet;

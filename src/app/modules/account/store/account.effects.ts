import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';

import { Wallet } from '../../../shared/models/wallet.model';
import * as AccountActions from './account.actions';
import { environment } from '../../../../environments/environment';

@Injectable()
export class AccountEffects {
  @Effect()
  userFetch = this.actions$
    .pipe(
      ofType(AccountActions.FETCH_WALLET),
      switchMap((action: AccountActions.FetchWallet) => {
        return this.httpClient.get<Wallet>(environment.apiServer.apiUrl + '/wallets/3' , {
          observe: 'body',
          responseType: 'json'
        });
      }),
      map(
        (userWallet) => {
          return {
            type: AccountActions.SET_WALLET,
            payload: userWallet
          };
        }
      )
    );

  constructor(private actions$: Actions, private httpClient: HttpClient) {}
}

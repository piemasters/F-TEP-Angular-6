import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, switchMap, withLatestFrom } from 'rxjs/operators';

import { Wallet } from '../../../shared/models/wallet.model';
import * as AccountActions from './account.actions';
import { environment } from '../../../../environments/environment';
import { Store } from '@ngrx/store';
import * as fromAccount from './account.reducers';

@Injectable()
export class AccountEffects {
  constructor(private actions$: Actions, private httpClient: HttpClient, private store: Store<fromAccount.FeatureState>) {}

  @Effect()
  userFetch = this.actions$
    .pipe(
      ofType(AccountActions.FETCH_WALLET),
      withLatestFrom(this.store.select('activeUser')),
      switchMap(([action, state]) => {
        return this.httpClient.get<Wallet>(environment.apiServer.apiUrl + '/wallets/' + state.activeUser.id , {
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


}

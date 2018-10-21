import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, switchMap, withLatestFrom } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import { Store } from '@ngrx/store';
import * as fromUsers from './users.reducers';
import * as UsersActions from './users.actions';


@Injectable()
export class UsersEffects {
  constructor(private actions$: Actions, private httpClient: HttpClient, private store: Store<fromUsers.State>) {}

  @Effect()
  userListFetch = this.actions$
    .pipe(
      ofType(UsersActions.FETCH_USER_LIST),
      withLatestFrom(this.store.select('users')),
      switchMap(([action, state]) => {
        return this.httpClient.get<any>(environment.apiServer.apiUrl + '/users/search/byFilter'
          + '?sort='  + (state.userSearch.sort ? state.userSearch.sort : '')
          + '&filter=' + (state.userSearch.filter ? state.userSearch.filter : '')
          + '&page=' + (state.userPage.number - 1 > 0 ? state.userPage.number - 1 : 0), {
          observe: 'body',
          responseType: 'json'
        });
      }),
      map(
        (usersResponse) => {
          return {
            type: UsersActions.SET_USER_LIST,
            payload: usersResponse
          };
        }
      )
    );

  @Effect()
  userFetch = this.actions$
    .pipe(
      ofType(UsersActions.FETCH_USER),
      withLatestFrom(this.store.select('users')),
      switchMap(([action, state]) => {
        return this.httpClient.get<any>(environment.apiServer.apiUrl + '/users/' + state.selectedUser.id, {
          observe: 'body',
          responseType: 'json'
        });
      }),
      map(
        (user) => {
          // return {
          //   type: AccountActions.SET_USER,
          //   payload: user
          // };
          const walletURL = user._links.wallet ? user._links.wallet.href : null;
          const walletURLSub = walletURL ? walletURL.substr(walletURL.lastIndexOf('/') + 1) : null;
          const walletID = Number(walletURLSub ? walletURLSub.substr(0, walletURLSub.indexOf('{')) : null);
          return {
            type: UsersActions.SET_USER,
            payload: {
              id: user.id,
              name: user.name,
              email: user.email,
              role: user.role,
              walletId: walletID
            }
          };
        }
      )
    );

  @Effect()
  walletFetch = this.actions$
    .pipe(
      ofType(UsersActions.FETCH_WALLET),
      withLatestFrom(this.store.select('users')),
      switchMap(([action, state]) => {
        console.log('wallet!!');
        console.log( state.selectedUser);
        return this.httpClient.get<any>(environment.apiServer.apiUrl + '/wallets/' + state.selectedUser.walletId, {
          observe: 'body',
          responseType: 'json'
        });
      }),
      map(
        (userWallet) => {
          console.log('wallet effect');
          return {
            type: UsersActions.SET_WALLET,
            payload: {
              balance: userWallet.balance,
              owner: userWallet._embedded.owner,
              transactions: userWallet._embedded.transactions
            }
          };
        }
      )
    );
}

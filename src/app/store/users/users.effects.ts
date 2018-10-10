import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, switchMap, withLatestFrom } from 'rxjs/operators';

import * as AccountActions from './users.actions';
import { environment } from '../../../environments/environment';
import { Store } from '@ngrx/store';
import * as fromUsers from './users.reducers';
import * as AdminActions from '../../modules/admin/store/admin.actions';


@Injectable()
export class UsersEffects {
  constructor(private actions$: Actions, private httpClient: HttpClient, private store: Store<fromUsers.State>) {}

  @Effect()
  userListFetch = this.actions$
    .pipe(
      ofType(AdminActions.FETCH_USER_LIST),
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
            type: AdminActions.SET_USER_LIST,
            payload: usersResponse
          };
        }
      )
    );

  @Effect()
  userFetch = this.actions$
    .pipe(
      ofType(AccountActions.FETCH_USER),
      withLatestFrom(this.store.select('users')),
      switchMap(([action, state]) => {
        return this.httpClient.get<any>(environment.apiServer.apiUrl + '/users/' + state.selectedUser.id, {
          observe: 'body',
          responseType: 'json'
        });
      }),
      map(
        (selectedUser) => {
          return {
            type: AccountActions.SET_USER,
            payload: selectedUser
          };
        }
      )
    );

  @Effect()
  walletFetch = this.actions$
    .pipe(
      ofType(AccountActions.FETCH_WALLET),
      withLatestFrom(this.store.select('users')),
      switchMap(([action, state]) => {
        return this.httpClient.get<any>(environment.apiServer.apiUrl + '/wallets/' + state.selectedUser.id, {
          observe: 'body',
          responseType: 'json'
        });
      }),
      map(
        (userWallet) => {
          return {
            type: AccountActions.SET_WALLET,
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

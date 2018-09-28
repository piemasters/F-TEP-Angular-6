import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, switchMap, withLatestFrom } from 'rxjs/operators';

import * as AdminActions from './admin.actions';
import { environment } from '../../../../environments/environment';
import { Store } from '@ngrx/store';
import * as fromAdmin from './admin.reducers';

@Injectable()
export class AdminEffects {
  constructor(private actions$: Actions, private httpClient: HttpClient, private store: Store<fromAdmin.FeatureState>) {}

  @Effect()
  userListFetch = this.actions$
    .pipe(
      ofType(AdminActions.FETCH_USER_LIST),
      switchMap((action: AdminActions.FetchUserList) => {
        return this.httpClient.get<any>(environment.apiServer.apiUrl + '/users/' , {
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
  userListFilterFetch = this.actions$
    .pipe(
      ofType(AdminActions.FETCH_USER_FILTERED_LIST),
      withLatestFrom(this.store.select('admin')),
      switchMap(([action, state]) => {
        return this.httpClient.get<any>(
          environment.apiServer.apiUrl + '/users/search/byFilter?sort=name&filter='
          + state.userSearchFilter ? state.userSearchFilter : '', {
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
}

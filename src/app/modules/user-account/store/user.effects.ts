import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';

import { User } from '../user.model';
import * as UserActions from './user.actions';
import * as fromUser from './user.reducers';
import { environment } from '../../../../environments/environment';

@Injectable()
export class UserEffects {
  @Effect()
  userFetch = this.actions$
    .pipe(
      ofType(UserActions.FETCH_ACTIVE_USER),
      switchMap((action: UserActions.FetchUser) => {
        return this.httpClient.get<User>(environment.urls.ftepUrl + '/users/current', {
          observe: 'body',
          responseType: 'json'
        });
      }),
      map(
        (activeUser) => {
          return {
            type: UserActions.SET_ACTIVE_USER,
            payload: activeUser
          };
        }
      )
    );

  constructor(private actions$: Actions, private httpClient: HttpClient, private store: Store<fromUser.FeatureState>) {}
}

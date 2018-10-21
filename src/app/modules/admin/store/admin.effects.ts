import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { switchMap, withLatestFrom } from 'rxjs/operators';

import * as AdminActions from './admin.actions';
import { environment } from '../../../../environments/environment';
import { Store } from '@ngrx/store';
import * as fromAdmin from './admin.reducers';

@Injectable()
export class AdminEffects {
  constructor(private actions$: Actions, private httpClient: HttpClient, private store: Store<fromAdmin.FeatureState>) {}

  @Effect()
  endorseCoins = this.actions$
    .pipe(
      ofType(AdminActions.ENDORSE_COINS),
      withLatestFrom(this.store.select('admin')),
      switchMap(([action, state]) => {
        const req = new HttpRequest(
          'PUT',
          environment.apiServer.apiUrl + '/wallets/' + state.selectedUser.id + '/credit',
          { amount: state.coins },
          { reportProgress: true }
        );
        return this.httpClient.request(req);
      })
    );

}

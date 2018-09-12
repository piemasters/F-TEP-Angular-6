import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as AuthActions from './core/auth/store/auth.actions';
import { AppState } from './store/app.reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'F-TEP-v2';

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.store.dispatch(new AuthActions.FetchUser());
  }
}

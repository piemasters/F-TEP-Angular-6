import { Component, OnInit } from '@angular/core';

// import * as fromUser from '../../store/app.reducers';
import * as UserActions from './modules/user-account/store/user.actions';
import { Store } from '@ngrx/store';
import { FeatureState } from './modules/user-account/store/user.reducers';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'F-TEP-v2';

  constructor(
    private store: Store<FeatureState>
  ) { }

  ngOnInit() {
    this.store.dispatch(new UserActions.FetchUser());
  }
}

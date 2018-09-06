import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Store } from '@ngrx/store';

import * as UserActions from './store/user.actions';
import { Observable } from 'rxjs';
import { FeatureState } from './store/user.reducers';
import { User } from './user.model';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.scss']
})
export class UserAccountComponent implements OnInit {
  userState: Observable<{ activeUser: User }>;
  urls = environment.urls;

  wallet = {
    balance: 100,
    transactions: [
      {
        id: 1,
        type: 'JOB',
        associatedId: 628,
        balanceChange: 5,
        transactionTime: '2017-06-09T13:30:51.544'
      },
      {
        id: 2,
        type: 'DOWNLOAD',
        balanceChange: -5,
        transactionTime: '2017-06-09T13:30:51.544'
      }

    ]
  };

  constructor(
    private store: Store<FeatureState>
  ) { }

  ngOnInit() {
    this.userState = this.store.select('activeUser');
  }

  getUser() {
    this.store.dispatch(new UserActions.FetchUser());
    this.userState = this.store.select('activeUser');
  }

}

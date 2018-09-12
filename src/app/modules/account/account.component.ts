import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';
import { Wallet } from '../../shared/models/wallet.model';
import { User } from '../../shared/models/user.model';
import * as fromAccount from './store/account.reducers';
import * as AccountActions from './store/account.actions';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  userState: Observable<{ activeUser: User }>;
  accountState: Observable<{ userWallet: Wallet }>;
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
    private store: Store<fromAccount.FeatureState>
  ) { }

  ngOnInit() {
    this.store.dispatch(new AccountActions.FetchWallet());

    this.userState = this.store.select('activeUser');
    this.accountState = this.store.select('account');
  }

}

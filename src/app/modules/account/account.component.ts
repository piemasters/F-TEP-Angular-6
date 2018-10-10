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
  activeUserState: Observable<{ activeUser: User }>;
  accountState: Observable<{ activeUserWallet: Wallet }>;
  urls = environment.urls;

  constructor(
    private store: Store<fromAccount.FeatureState>
  ) { }

  ngOnInit() {
    this.store.dispatch(new AccountActions.FetchWallet());

    this.activeUserState = this.store.select('activeUser');
    this.accountState = this.store.select('account');
  }

}

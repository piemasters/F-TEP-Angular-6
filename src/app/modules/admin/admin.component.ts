import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

import { User } from '../../shared/models/user.model';
import { Wallet } from '../../shared/models/wallet.model';
import * as fromAdmin from './store/admin.reducers';
import * as AdminActions from './store/admin.actions';
import * as UsersActions from '../../store/users/users.actions';
import * as fromUsers from '../../store/users/users.reducers';

@Component({
  selector: 'app-account',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  private subject: Subject<any> = new Subject();
  activeUserState: Observable<{ activeUser: User }>;
  // adminState: Observable<{ userList: User[], userLinks, userPage, userSearch }>;
  usersState: Observable<{ userWallet: Wallet, selectedUser: User, userList: User[], userLinks, userPage, userSearch }>;
  userList;

  sortValues = ['id', 'name', 'role', 'email'];
  loading: boolean;

  constructor(
    private store: Store<fromAdmin.FeatureState>
  ) { }

  ngOnInit() {
    this.store.dispatch(new UsersActions.FetchUserList());
    this.activeUserState = this.store.select('activeUser');
    this.usersState = this.store.select('users');
    this.subject.pipe(debounceTime(500)).subscribe(action => {
      this.updateUserList(action);
    });

    const userList = this.usersState.subscribe((usersState: fromUsers.State) => {
      this.userList = usersState.userList;
    });
    this.selectUser(this.userList[0]);
  }

  onFilterKeyUp(action) {
    this.subject.next(action);
  }

  updateUserList(action) {
    this.loading = true;

    this.store.dispatch(new UsersActions.SetUserSearch({ filter: action.filter, sort: action.sort }));
    this.store.dispatch(new UsersActions.SetUserPage(action.page));
    this.store.dispatch(new UsersActions.FetchUserList());

    setTimeout(() => {
      this.loading = false;
    }, 400);
  }

  selectUser(user) {
    this.store.dispatch(new UsersActions.SetUser(user));
    this.store.dispatch(new UsersActions.FetchUser());
    this.store.dispatch(new UsersActions.FetchWallet());
  }

}

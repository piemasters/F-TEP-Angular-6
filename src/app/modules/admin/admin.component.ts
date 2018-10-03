import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { User } from '../../shared/models/user.model';
import * as fromAdmin from './store/admin.reducers';
import * as AdminActions from './store/admin.actions';

@Component({
  selector: 'app-account',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  userState: Observable<{ activeUser: User }>;
  adminState: Observable<{ userList: User[], userLinks, userPage }>;
  loading: boolean;

  constructor(
    private store: Store<fromAdmin.FeatureState>
  ) { }

  ngOnInit() {
    this.store.dispatch(new AdminActions.FetchUserList());
    this.userState = this.store.select('activeUser');
    this.adminState = this.store.select('admin');
  }


  filterUsers(filter) {
    this.store.dispatch(new AdminActions.SetUserFilter(filter));
  }

  getPage(page: number) {
    this.loading = true;

    this.store.dispatch(new AdminActions.SetUserPage({ page: page }));
    this.store.dispatch(new AdminActions.FetchUserList());

      setTimeout(() => {
        this.loading = false;
      }, 600);
  }

}

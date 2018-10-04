import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';

import { User } from '../../shared/models/user.model';
import * as fromAdmin from './store/admin.reducers';
import * as AdminActions from './store/admin.actions';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-account',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  private subject: Subject<any> = new Subject();
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
    this.subject.pipe(debounceTime(500)).subscribe(action => {
      this.updateUserList(action);
    });
  }

  onFilterKeyUp(action) {
    this.subject.next(action);
  }

  updateUserList(action) {
    this.loading = true;

    if (action.filter) {
      this.store.dispatch(new AdminActions.SetUserFilter(action.filter));
    }

    if (action.page) {
      this.store.dispatch(new AdminActions.SetUserPage(action.page));
    }

    this.store.dispatch(new AdminActions.FetchUserList());

    setTimeout(() => {
      this.loading = false;
    }, 400);
  }

}

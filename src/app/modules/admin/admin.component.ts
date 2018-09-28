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
  pageSize = 1;
  currentPage = 1;
  total: number;
  loading: boolean;

  constructor(
    private store: Store<fromAdmin.FeatureState>
  ) { }

  ngOnInit() {
    this.store.dispatch(new AdminActions.FetchUserList());
    this.userState = this.store.select('activeUser');
    this.adminState = this.store.select('admin');

    this.getPage(1);
  }

  getPage(page: number) {
    this.loading = true;
    this.currentPage = page;
    this.loading = false;

    // this.asyncMeals = serverCall(this.meals, page)
    //   .do(res => {
    //     this.total = res.total;
    //     this.p = page;
    //     this.loading = false;
    //   })
    //   .map(res => res.items);
  }

}

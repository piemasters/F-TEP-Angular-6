import { NgModule } from '@angular/core';

import { UserAccountComponent } from './user-account.component';
import { CommonModule } from '@angular/common';
import { UserAccountRoutingModule } from './user-account-routing.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './store/user.effects';
import { activeUserReducer } from './store/user.reducers';

@NgModule({
  declarations: [
    UserAccountComponent
  ],
  imports: [
    CommonModule,
    UserAccountRoutingModule,
  ],
  providers: []
})
export class UserAccountModule { }

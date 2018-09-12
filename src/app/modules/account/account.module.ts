import { NgModule } from '@angular/core';

import { AccountComponent } from './account.component';
import { CommonModule } from '@angular/common';
import { AccountRoutingModule } from './account-routing.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { userReducer } from './store/account.reducers';
import { AccountEffects } from './store/account.effects';

@NgModule({
  declarations: [
    AccountComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    StoreModule.forFeature('account', userReducer),
    EffectsModule.forFeature([AccountEffects])
  ],
  providers: [

  ]
})
export class AccountModule { }

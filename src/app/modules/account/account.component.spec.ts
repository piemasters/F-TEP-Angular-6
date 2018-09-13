import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountComponent } from './account.component';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { userReducer } from './store/account.reducers';
import { EffectsModule } from '@ngrx/effects';
import { AccountEffects } from './store/account.effects';
import { RouterTestingModule } from '@angular/router/testing';
import { reducers } from '../../store/app.reducers';
import { HttpClientModule } from '@angular/common/http';

describe('AccountComponent', () => {
  let component: AccountComponent;
  let fixture: ComponentFixture<AccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountComponent ],
      imports: [
        RouterTestingModule,
        CommonModule,
        HttpClientModule,
        StoreModule.forRoot(reducers),
        EffectsModule.forRoot([]),
        StoreModule.forFeature('account', userReducer),
        EffectsModule.forFeature([AccountEffects])
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

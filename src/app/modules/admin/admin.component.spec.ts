import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminComponent } from './admin.component';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { RouterTestingModule } from '@angular/router/testing';
import { reducers } from '../../store/app.reducers';
import { HttpClientModule } from '@angular/common/http';
import { adminReducer } from './store/admin.reducers';
import { AdminEffects } from './store/admin.effects';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

describe('AdminComponent', () => {
  let component: AdminComponent;
  let fixture: ComponentFixture<AdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminComponent ],
      imports: [
        RouterTestingModule,
        CommonModule,
        HttpClientModule,
        StoreModule.forRoot(reducers),
        EffectsModule.forRoot([]),
        StoreModule.forFeature('admin', adminReducer),
        EffectsModule.forFeature([AdminEffects]),
        FontAwesomeModule,
        NgxPaginationModule,
        NgbModule
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

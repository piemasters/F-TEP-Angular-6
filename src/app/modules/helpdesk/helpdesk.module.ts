import { NgModule } from '@angular/core';

import { HelpdeskComponent } from './helpdesk.component';
import { CommonModule } from '@angular/common';
import { HelpdeskRoutingModule } from './helpdesk-routing.module';

@NgModule({
  declarations: [
    HelpdeskComponent
  ],
  imports: [
    CommonModule,
    HelpdeskRoutingModule
  ],
  providers: []
})
export class HelpdeskModule { }

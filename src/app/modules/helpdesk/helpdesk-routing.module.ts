import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HelpdeskComponent } from './helpdesk.component';

const routes: Routes = [
  {
    path: '',
    component: HelpdeskComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HelpdeskRoutingModule {}

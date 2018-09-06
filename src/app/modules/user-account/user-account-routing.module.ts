import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { UserAccountComponent } from './user-account.component';

const routes: Routes = [
  {
    path: '',
    component: UserAccountComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserAccountRoutingModule {}

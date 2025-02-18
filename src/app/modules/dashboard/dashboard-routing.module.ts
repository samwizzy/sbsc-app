import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'account',
        component: AccountComponent,
        data: {
          title: 'My Account',
          description: 'This is my account profile page',
        },
      },

      {
        path: 'users',
        loadChildren: () => import('./users/users.module').then((m) => m.UsersModule),
      },

      { path: '', redirectTo: '', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}

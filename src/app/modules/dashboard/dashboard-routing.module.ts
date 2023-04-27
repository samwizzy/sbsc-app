import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { ContactusComponent } from './contactus/contactus.component';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: 'home', component: HomeComponent },
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
        loadChildren: () =>
          import('./users/users.module').then((m) => m.UsersModule),
      },
      {
        path: 'contactus',
        component: ContactusComponent,
      },
      { path: '', redirectTo: '/home', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}

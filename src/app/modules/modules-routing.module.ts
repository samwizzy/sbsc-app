import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModulesComponent } from './modules.component';
import { protectedGuard } from '../core/guards/protected.guard';
import { HomeComponent } from 'src/app/modules/home/home.component';
import { ContactusComponent } from 'src/app/modules/contactus/contactus.component';
import { ThankYouComponent } from './thank-you/thank-you.component';
import { ActionsComponent } from './actions/actions.component';
import { StickyComponent } from './sticky/sticky.component';

const routes: Routes = [
  {
    path: '',
    component: ModulesComponent,
    children: [
      { path: '', component: HomeComponent },
      {
        path: 'dashboard',
        canActivate: [protectedGuard],
        loadChildren: () =>
          import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
      },
      {
        path: 'contactus',
        component: ContactusComponent,
      },
      {
        path: 'sticky',
        component: StickyComponent,
      },
      // { path: 'parant', component: ParantComponent },
      // { path: 'longform', component: LongformComponent },
      { path: 'actions', component: ActionsComponent },
      { path: 'thankyou', component: ThankYouComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModulesRoutingModule {}

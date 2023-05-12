import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProtectedGuard } from '../core/guards/protected.guard';
// import { ParantComponent } from '../parant/parant.component';
// import { LongformComponent } from './longform/longform.component';
// import { ActionsComponent } from './actions/actions.component';
// import { ThankYouComponent } from './thank-you/thank-you.component';
import { ModulesComponent } from './modules.component';
import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './contactus/contactus.component';

const routes: Routes = [
  {
    path: '',
    component: ModulesComponent,
    children: [
      { path: '', component: HomeComponent },
      {
        path: 'dashboard',
        canActivate: [ProtectedGuard],
        loadChildren: () =>
          import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
      },
      {
        path: 'contactus',
        component: ContactusComponent,
      },
      // { path: 'parant', component: ParantComponent },
      // { path: 'longform', component: LongformComponent },
      // { path: 'actions', component: ActionsComponent },
      // { path: 'thankyou', component: ThankYouComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModulesRoutingModule {}

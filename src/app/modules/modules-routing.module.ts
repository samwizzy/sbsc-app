import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { ParantComponent } from '../parant/parant.component';
// import { LongformComponent } from './longform/longform.component';
// import { ActionsComponent } from './actions/actions.component';
// import { ThankYouComponent } from './thank-you/thank-you.component';
import { ProtectedGuard } from '../core/guards/protected.guard';
import { HomeComponent } from './home/home.component';
import { ModulesComponent } from './modules.component';

const routes: Routes = [
  {
    path: '',
    component: ModulesComponent,
    children: [
      { path: 'home', component: HomeComponent },
      {
        path: '',
        canActivate: [ProtectedGuard],
        loadChildren: () =>
          import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
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

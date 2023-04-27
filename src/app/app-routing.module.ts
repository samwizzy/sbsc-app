import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/core/guards/auth.guard';
import { ProtectedGuard } from 'src/app/core/guards/protected.guard';
import { NotFoundComponent } from './not-found/not-found.component';
import { ParantComponent } from './parant/parant.component';
import { ThankYouComponent } from './modules/thank-you/thank-you.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [ProtectedGuard],
    loadChildren: () =>
      import('./modules/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
  },
  {
    path: 'auth',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./modules/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'playground',
    loadChildren: () =>
      import('./playground/playground.module').then((m) => m.PlaygroundModule),
  },
  { path: 'parant', component: ParantComponent },
  { path: 'thankyou', component: ThankYouComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabledBlocking',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

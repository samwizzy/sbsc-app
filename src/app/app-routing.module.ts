import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGuard } from './core/guards/auth.guard';
import { HomeComponent } from './modules/home/home.component';

const routes: Routes = [
  {
    path: 'auth',
    canActivate: [AuthGuard],
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'modules',
    loadChildren: () =>
      import('./modules/modules.module').then((m) => m.ModulesModule),
  },
  { path: '', component: HomeComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' },
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

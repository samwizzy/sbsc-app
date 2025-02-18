import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './modules/home/home.component';
import { ActionsComponent } from './modules/actions/actions.component';

const routes: Routes = [
  { path: '', component: HomeComponent },

  { path: 'actions', component: ActionsComponent },

  {
    path: 'app',
    loadChildren: () => import('./modules/modules.module').then((m) => m.ModulesModule),
  },

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

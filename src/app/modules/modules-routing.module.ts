import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModulesComponent } from './modules.component';
import { protectedGuard } from '../core/guards/protected.guard';
import { HomeComponent } from 'src/app/modules/home/home.component';
import { ContactusComponent } from 'src/app/modules/contactus/contactus.component';
import { ThankYouComponent } from './thank-you/thank-you.component';
import { ActionsComponent } from './actions/actions.component';
import { StickyComponent } from './sticky/sticky.component';
import { DragdropComponent } from './dragdrop/dragdrop.component';
import { RepositionComponent } from './reposition/reposition.component';
import { ArrayFormComponent } from './array-form/array-form.component';
import { NgformTestComponent } from './ngform-test/ngform-test.component';
import { RecursionFormComponent } from './recursion-form/recursion-form.component';
import { DynamicCompComponent } from './dynamic-comp/dynamic-comp.component';
import { LongformComponent } from './longform/longform.component';
import { IntersectionComponent } from './intersection/intersection.component';
import { FromeventComponent } from './fromevent/fromevent.component';
import { GridComponent } from './grid/grid.component';
import { ContentPlaceComponent } from './content-place/content-place.component';
import { SlideMenusComponent } from './slide-menus/slide-menus.component';

const routes: Routes = [
  {
    path: '',
    component: ModulesComponent,
    children: [
      { path: '', component: HomeComponent },

      {
        path: 'dashboard',
        canActivate: [protectedGuard],
        loadChildren: () => import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
      },

      {
        path: 'contactus',
        component: ContactusComponent,
      },

      {
        path: 'sticky',
        component: StickyComponent,
      },

      {
        path: 'dragdrop',
        component: DragdropComponent,
      },

      {
        path: 'slide-menus',
        component: SlideMenusComponent,
      },

      {
        path: 'reposition',
        component: RepositionComponent,
      },

      {
        path: 'longform',
        component: LongformComponent,
      },

      {
        path: 'intersection',
        component: IntersectionComponent,
      },

      {
        path: 'arrayform',
        component: ArrayFormComponent,
      },

      {
        path: 'ngform',
        component: NgformTestComponent,
      },

      {
        path: 'fromevent',
        component: FromeventComponent,
      },

      {
        path: 'grid-layout',
        component: GridComponent,
      },

      {
        path: 'dynamic-comp',
        component: DynamicCompComponent,
      },

      {
        path: 'content-place',
        component: ContentPlaceComponent,
      },

      {
        path: 'conditions',
        loadChildren: async () =>
          (await import('./conditions-form/conditions-form.module')).ConditionsFormModule,
      },

      {
        path: 'recursion-form',
        component: RecursionFormComponent,
      },
      // { path: 'parant', component: ParantComponent },
      // { path: 'longform', component: LongformComponent },
      { path: 'actions', component: ActionsComponent },
      { path: 'thankyou', component: ThankYouComponent },
    ],
  },
  { path: 'shop', loadChildren: () => import('./shop/shop.module').then((m) => m.ShopModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModulesRoutingModule {}

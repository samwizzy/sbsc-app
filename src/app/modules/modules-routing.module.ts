import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModulesComponent } from './modules.component';
import { protectedGuard } from '../core/guards/protected.guard';
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
import { ScrollableTagsComponent } from './scrollable-tags/scrollable-tags.component';
import { MutationComponent } from './mutation/mutation.component';
import { RefreshOnSaveComponent } from './refresh-on-save/refresh-on-save.component';
import { SideMainComponent } from './side-main/side-main.component';
import { DomPracticeComponent } from './dom-practice/dom-practice.component';
import { QuickstyleComponent } from './quickstyle/quickstyle.component';
import { AutocompleteInputComponent } from './autocomplete-input/autocomplete-input.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { AssemblyListModule } from './assembly-list/assembly-list.module';
import { ScrollInViewComponent } from './scroll-in-view/scroll-in-view.component';

const routes: Routes = [
  {
    path: '',
    component: ModulesComponent,
    children: [
      {
        path: '',
        loadChildren: async () => await ((await import('./home/home.module')).HomeModule),
      },

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
        path: 'side-main',
        component: SideMainComponent,
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
        path: 'mutation',
        component: MutationComponent,
      },

      {
        path: 'arrayform',
        component: ArrayFormComponent,
      },

      {
        path: 'dom-practice',
        component: DomPracticeComponent,
      },

      {
        path: 'scrollable-tags',
        component: ScrollableTagsComponent,
      },

      {
        path: 'refresh-on-save',
        component: RefreshOnSaveComponent,
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
        path: 'file-upload',
        component: FileUploadComponent,
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
        path: 'quickstyle',
        component: QuickstyleComponent,
      },

      {
        path: 'assembly-list',
        loadChildren: async () =>
          (await import('./assembly-list/assembly-list.module')).AssemblyListModule,
      },

      {
        path: 'codemirror',
        loadChildren: async () => (await import('./cm-editor/cm-editor.module')).CmEditorModule,
      },

      {
        path: 'monaco-editor',
        loadChildren: async () =>
          (await import('./monaco-editor/monaco-editor.module')).MonacoEditorModule,
      },

      {
        path: 'monaco-editor-cdn',
        loadChildren: async () =>
          (await import('./monaco-editor-cdn/monaco-editor-cdn.module')).MonacoEditorCdnModule,
      },

      {
        path: 'websocket',
        loadChildren: async () => (await import('./web-socket/web-socket.module')).WebSocketModule,
      },

      {
        path: 'headless-ui',
        loadChildren: async () =>
          (await import('./headless-ui/headless-ui.module')).HeadlessUiModule,
      },

      {
        path: 'two-way',
        loadChildren: async () => (await import('./two-way/two-way.module')).TwoWayModule,
      },

      {
        path: 'conditions',
        loadChildren: async () =>
          (await import('./conditions-form/conditions-form.module')).ConditionsFormModule,
      },

      {
        path: 'calendar',
        loadChildren: async () =>
          (await import('./manage-calendar/manage-calendar.module')).ManageCalendarModule,
      },

      {
        path: 'tictactoe',
        loadChildren: async () =>
          (await import('./tic-tac-toe/tic-tac-toe.module')).TicTacToeModule,
      },

      {
        path: 'recursion-form',
        component: RecursionFormComponent,
      },

      {
        path: 'scroll-in-view',
        component: ScrollInViewComponent,
      },

      {
        path: 'sheet-slide',
        loadChildren: async () => (await import('./sheet/sheet.module')).SheetModule,
      },

      {
        path: 'tour-guide',
        loadChildren: () => import('./tour-guide/tour-guide.module').then((m) => m.TourGuideModule),
      },

      {
        path: 'horizontal-scroll',
        loadChildren: () =>
          import('./horizontal-scroll/horizontal-scroll.module').then(
            (m) => m.HorizontalScrollModule
          ),
      },

      // { path: 'parant', component: ParantComponent },
      // { path: 'longform', component: LongformComponent },
      { path: 'actions', component: ActionsComponent },
      { path: 'autocomplete', component: AutocompleteInputComponent },
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

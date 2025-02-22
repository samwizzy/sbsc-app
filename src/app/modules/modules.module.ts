import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModulesRoutingModule } from './modules-routing.module';
import { ModulesComponent } from './modules.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/material/material.module';
import { ComponentsModule } from '../shared/components/components.module';
import { TodoDetailsComponent } from './todo-details/todo-details.component';
import { ActionsComponent } from './actions/actions.component';
import { LongformComponent } from './longform/longform.component';
import { FontawesomeIconsModule } from '../shared/fontawesome-icons/fontawesome-icons.module';
import { ContactusComponent } from './contactus/contactus.component';
import { ThankYouComponent } from './thank-you/thank-you.component';
import { ClickAwayDirective } from '../core/directives/click-away.directive';
import { StickyComponent } from './sticky/sticky.component';
import { DragdropComponent } from './dragdrop/dragdrop.component';
import { TextComponent } from './text/text.component';
import { register } from 'swiper/element/bundle';
import { RepositionComponent } from './reposition/reposition.component';
import { ArrayFormComponent } from './array-form/array-form.component';
import { NgformTestComponent, PasswordCheckDirective } from './ngform-test/ngform-test.component';
import { SwitcherModule } from '../shared/components/switcher/switcher.module';
import { RecursionFormComponent } from './recursion-form/recursion-form.component';
import { ConditionsTemplateComponent } from './conditions-template/conditions-template.component';
import { DynamicCompComponent } from './dynamic-comp/dynamic-comp.component';
import { SideModalComponent } from './side-modal/side-modal.component';
import { IntersectionComponent } from './intersection/intersection.component';
import { FromeventComponent } from './fromevent/fromevent.component';
import { GridComponent } from './grid/grid.component';
import { DirectivesModule } from '../core/directives/directives.module';
import { ContentPlaceComponent } from './content-place/content-place.component';
import { SlideMenusComponent } from './slide-menus/slide-menus.component';
import { ScrollableTagsComponent } from './scrollable-tags/scrollable-tags.component';
import { MutationComponent } from './mutation/mutation.component';
import { RefreshOnSaveComponent } from './refresh-on-save/refresh-on-save.component';
import { SideMainComponent } from './side-main/side-main.component';
import { DomPracticeComponent } from './dom-practice/dom-practice.component';
import { QuickstyleComponent } from './quickstyle/quickstyle.component';
import { RhombusShapeComponent } from './rhombus-shape/rhombus-shape.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { ScrollInViewComponent } from './scroll-in-view/scroll-in-view.component';
import { NavbarModule } from '../shared/components/navbar/navbar.module';
import { FooterModule } from '../shared/components/footer/footer.module';

register();

// declare const gapi: any;

@NgModule({
  declarations: [
    ModulesComponent,
    ContactusComponent,
    ActionsComponent,
    TodoDetailsComponent,
    LongformComponent,
    ThankYouComponent,
    ClickAwayDirective,
    StickyComponent,
    DragdropComponent,
    TextComponent,
    RepositionComponent,
    ArrayFormComponent,
    NgformTestComponent,
    PasswordCheckDirective,
    RecursionFormComponent,
    ConditionsTemplateComponent,
    DynamicCompComponent,
    SideModalComponent,
    IntersectionComponent,
    FromeventComponent,
    GridComponent,
    ContentPlaceComponent,
    SlideMenusComponent,
    ScrollableTagsComponent,
    MutationComponent,
    RefreshOnSaveComponent,
    SideMainComponent,
    DomPracticeComponent,
    QuickstyleComponent,
    RhombusShapeComponent,
    FileUploadComponent,
    ScrollInViewComponent,
  ],
  imports: [
    CommonModule,
    ModulesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    NavbarModule,
    FooterModule,
    ComponentsModule,
    FontawesomeIconsModule,
    SwitcherModule,
    DirectivesModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class ModulesModule {}

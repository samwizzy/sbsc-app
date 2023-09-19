import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModulesRoutingModule } from './modules-routing.module';
import { ModulesComponent } from './modules.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/material/material.module';
import { ComponentsModule } from '../shared/components/components.module';
import { HomeComponent } from './home/home.component';
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

register();

@NgModule({
  declarations: [
    ModulesComponent,
    HomeComponent,
    ContactusComponent,
    ActionsComponent,
    TodoDetailsComponent,
    LongformComponent,
    ThankYouComponent,
    ClickAwayDirective,
    StickyComponent,
    DragdropComponent,
    TextComponent,
  ],
  imports: [
    CommonModule,
    ModulesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    ComponentsModule,
    FontawesomeIconsModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class ModulesModule {}

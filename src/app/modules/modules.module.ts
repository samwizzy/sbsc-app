import { NgModule } from '@angular/core';
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
})
export class ModulesModule {}

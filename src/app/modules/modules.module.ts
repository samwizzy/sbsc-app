import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModulesRoutingModule } from './modules-routing.module';
import { ModulesComponent } from './modules.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/material/material.module';
import { ComponentsModule } from '../shared/components/components.module';
import { HomeComponent } from './home/home.component';
import { TodoDetailsComponent } from './todo-details/todo-details.component';
import { ActionsComponent } from './actions/actions.component';

@NgModule({
  declarations: [
    ModulesComponent,
    HomeComponent,
    ActionsComponent,
    TodoDetailsComponent,
  ],
  imports: [
    CommonModule,
    ModulesRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    ComponentsModule,
  ],
})
export class ModulesModule {}

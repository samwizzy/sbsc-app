import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { ModulesRoutingModule } from './modules-routing.module';
import { ComponentsModule } from 'src/app/shared/components/components.module';

import { ModulesComponent } from './modules.component';
import { ParantComponent } from '../parant/parant.component';
import { ChildComponent } from '../child/child.component';
import { ThankYouComponent } from './thank-you/thank-you.component';
import { LongformComponent } from './longform/longform.component';
import { ActionsComponent } from './actions/actions.component';
import { TodoDetailsComponent } from './todo-details/todo-details.component';
import { HomeComponent } from './home/home.component';

const comps = [
  HomeComponent,
  ParantComponent,
  ChildComponent,
  ThankYouComponent,
  LongformComponent,
  ActionsComponent,
  TodoDetailsComponent,
];

@NgModule({
  declarations: [ModulesComponent, ...comps],
  imports: [
    CommonModule,
    ModulesRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    ComponentsModule,
  ],
})
export class ModulesModule {}

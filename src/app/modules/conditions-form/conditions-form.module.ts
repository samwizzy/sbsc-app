import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConditionsFormComponent } from './conditions-form.component';
import { RouterModule, Routes } from '@angular/router';
import { ConditionGroupComponent } from './condition-group/condition-group.component';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [{ path: '', component: ConditionsFormComponent }];

@NgModule({
  declarations: [ConditionsFormComponent, ConditionGroupComponent],
  imports: [CommonModule, RouterModule.forChild(routes), ReactiveFormsModule],
})
export class ConditionsFormModule {}

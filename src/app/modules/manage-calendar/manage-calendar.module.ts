import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageCalendarComponent } from './manage-calendar.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [{ path: '', component: ManageCalendarComponent }];

@NgModule({
  declarations: [ManageCalendarComponent],
  imports: [CommonModule, RouterModule.forChild(routes), MaterialModule, ReactiveFormsModule],
  exports: [ManageCalendarComponent],
})
export class ManageCalendarModule {}

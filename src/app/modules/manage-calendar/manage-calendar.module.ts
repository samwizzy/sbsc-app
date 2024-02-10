import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageCalendarComponent } from './manage-calendar.component';

@NgModule({
  declarations: [ManageCalendarComponent],
  imports: [CommonModule],
  exports: [ManageCalendarComponent],
})
export class ManageCalendarModule {}

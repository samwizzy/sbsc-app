import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailComponent } from './email.component';

@NgModule({
  declarations: [EmailComponent],
  imports: [CommonModule],
  exports: [EmailComponent],
})
export class EmailModule {}

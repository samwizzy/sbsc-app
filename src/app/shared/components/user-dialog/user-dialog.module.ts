import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDialogComponent } from './user-dialog.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [UserDialogComponent],
  imports: [CommonModule, ReactiveFormsModule, MatDialogModule, MatFormFieldModule],
  exports: [UserDialogComponent],
})
export class UserDialogModule {}

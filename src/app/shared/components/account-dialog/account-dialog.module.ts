import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountDialogComponent } from './account-dialog.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AccountDialogComponent],
  imports: [CommonModule, ReactiveFormsModule, MatDialogModule, MatFormFieldModule],
  exports: [AccountDialogComponent],
})
export class AccountDialogModule {}

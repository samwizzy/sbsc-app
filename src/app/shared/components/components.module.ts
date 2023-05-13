import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { MaterialModule } from '../material/material.module';
import { AccountDialogComponent } from './account-dialog/account-dialog.component';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { UserDialogComponent } from './user-dialog/user-dialog.component';

const comps = [
  NavbarComponent,
  FooterComponent,
  AccountDialogComponent,
  SnackbarComponent,
  UserDialogComponent,
];

@NgModule({
  declarations: [...comps],
  imports: [CommonModule, RouterModule, ReactiveFormsModule, MaterialModule],
  exports: [...comps],
})
export class ComponentsModule {}

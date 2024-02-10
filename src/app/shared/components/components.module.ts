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
import { TableComponent } from './table/table.component';
import { CardComponent } from './card/card.component';
import { BillingFormComponent } from './forms/billing-form/billing-form.component';
import { RatingComponent } from './rating/rating.component';

const comps = [
  NavbarComponent,
  FooterComponent,
  AccountDialogComponent,
  SnackbarComponent,
  UserDialogComponent,
  TableComponent,
  CardComponent,
  BillingFormComponent,
  RatingComponent,
];

@NgModule({
  declarations: [...comps],
  imports: [CommonModule, RouterModule, ReactiveFormsModule, MaterialModule],
  exports: [...comps],
})
export class ComponentsModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { CardComponent } from './card/card.component';
import { TableComponent } from './table/table.component';
import { RatingComponent } from './rating/rating.component';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { BillingFormComponent } from './forms/billing-form/billing-form.component';

const comps = [
  SnackbarComponent,
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

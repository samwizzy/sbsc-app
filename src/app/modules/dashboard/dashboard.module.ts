import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { AccountComponent } from './account/account.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { AccountDialogModule } from 'src/app/shared/components/account-dialog/account-dialog.module';

@NgModule({
  declarations: [DashboardComponent, AccountComponent],
  imports: [CommonModule, DashboardRoutingModule, MaterialModule, AccountDialogModule],
})
export class DashboardModule {}

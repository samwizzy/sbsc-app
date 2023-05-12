import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { AccountComponent } from './account/account.component';
import { MaterialModule } from 'src/app/shared/material/material.module';

@NgModule({
  declarations: [DashboardComponent, AccountComponent],
  imports: [CommonModule, DashboardRoutingModule, MaterialModule],
})
export class DashboardModule {}

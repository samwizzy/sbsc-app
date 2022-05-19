import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { AccountComponent } from './account/account.component';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from 'src/app/shared/material/material.module';

@NgModule({
  declarations: [DashboardComponent, AccountComponent, HomeComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ComponentsModule,
    MaterialModule,
  ],
})
export class DashboardModule {}

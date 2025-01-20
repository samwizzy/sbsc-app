import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadlessUiComponent } from './headless-ui.component';
import { RouterModule, Routes } from '@angular/router';
import { MatTableModule } from '@angular/material/table';

const routes: Routes = [{ path: '', component: HeadlessUiComponent }];

@NgModule({
  declarations: [HeadlessUiComponent],
  imports: [CommonModule, RouterModule.forChild(routes), MatTableModule],
})
export class HeadlessUiModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssemblyListComponent } from './assembly-list.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: AssemblyListComponent }];

@NgModule({
  declarations: [AssemblyListComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class AssemblyListModule {}

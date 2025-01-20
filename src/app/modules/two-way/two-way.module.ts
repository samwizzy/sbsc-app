import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { TwoWayComponent } from './two-way.component';
import { ChildWayComponent } from './child-way/child-way.component';
import { SiblingComponent } from './sibling/sibling.component';

const routes: Routes = [
  {
    path: '',
    component: TwoWayComponent,
    children: [{ path: ':id', component: SiblingComponent }],
  },
];

@NgModule({
  declarations: [TwoWayComponent, ChildWayComponent, SiblingComponent],
  imports: [CommonModule, RouterModule.forChild(routes), FormsModule],
  exports: [TwoWayComponent],
})
export class TwoWayModule {}

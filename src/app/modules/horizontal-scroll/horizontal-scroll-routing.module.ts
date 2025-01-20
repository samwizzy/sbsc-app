import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HorizontalScrollComponent } from './horizontal-scroll.component';

const routes: Routes = [{ path: '', component: HorizontalScrollComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HorizontalScrollRoutingModule { }

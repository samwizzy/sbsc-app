import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TourGuideComponent } from './tour-guide.component';

const routes: Routes = [{ path: '', component: TourGuideComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TourGuideRoutingModule { }

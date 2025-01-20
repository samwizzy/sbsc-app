import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TourGuideRoutingModule } from './tour-guide-routing.module';
import { TourGuideComponent } from './tour-guide.component';
import { TourMatMenuModule } from 'ngx-ui-tour-md-menu';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [TourGuideComponent],
  imports: [CommonModule, TourGuideRoutingModule, TourMatMenuModule, MatButtonModule],
})
export class TourGuideModule {}

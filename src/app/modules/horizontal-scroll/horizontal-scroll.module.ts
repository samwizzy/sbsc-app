import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HorizontalScrollRoutingModule } from './horizontal-scroll-routing.module';
import { HorizontalScrollComponent } from './horizontal-scroll.component';

@NgModule({
  declarations: [HorizontalScrollComponent],
  imports: [CommonModule, HorizontalScrollRoutingModule],
})
export class HorizontalScrollModule {}

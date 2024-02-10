import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RatingDirective } from './rating.directive';
import { MenuSlideDirective } from './menu-slide.directive';

@NgModule({
  declarations: [RatingDirective, MenuSlideDirective],
  imports: [CommonModule],
  exports: [RatingDirective, MenuSlideDirective],
})
export class DirectivesModule {}

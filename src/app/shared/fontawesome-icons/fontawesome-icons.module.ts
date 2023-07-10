import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FontAwesomeModule,
  FaIconLibrary,
} from '@fortawesome/angular-fontawesome';
import {
  faCamera,
  faCheck,
  faCircleArrowRight,
  faCircleChevronRight,
  faCoffee,
  faFilm,
  faRocket,
} from '@fortawesome/free-solid-svg-icons';

@NgModule({
  declarations: [],
  imports: [CommonModule, FontAwesomeModule],
  exports: [FontAwesomeModule],
})
export class FontawesomeIconsModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(
      faFilm,
      faCoffee,
      faCamera,
      faRocket,
      faCheck,
      faCircleArrowRight,
      faCircleChevronRight
    );
  }
}

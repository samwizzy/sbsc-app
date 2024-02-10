import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss'],
})
export class RatingComponent {
  @Input() stars!: number;

  getRateImage(current: number) {
    const previousHalf = current - 0.5;

    let imageName;

    if (this.stars >= current) {
      imageName = 'star-full';
    } else if (this.stars >= previousHalf) {
      imageName = 'star-empty';
    } else {
      imageName = 'star-empty';
    }

    return `/assets/images/${imageName}.svg`;
  }
}

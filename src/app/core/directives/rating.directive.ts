import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appRating]',
})
export class RatingDirective implements OnInit {
  @Input() stars!: number;

  @Input() set appRating(stars: number) {
    if (stars) {
      this.stars = stars;

      for (let index = 0; index < 5; index++) {
        this.vc.createEmbeddedView(this.templateRef);
      }
    } else {
      this.vc.clear();
    }
  }

  constructor(private templateRef: TemplateRef<unknown>, private vc: ViewContainerRef) {}

  ngOnInit(): void {
    // console.log(this.templateRef.elementRef, 'native');
  }

  getRateImage(current: number) {
    const previousHalf = current - 0.5;

    let imageName;

    if (this.stars >= current) {
      imageName = 'star-full';
    } else if (previousHalf >= current) {
      imageName = 'star-half';
    } else {
      imageName = 'star-full';
    }
  }
}

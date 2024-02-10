import { Directive, ElementRef, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appMenuSlide]',
})
export class MenuSlideDirective {
  @HostListener('mouseenter', ['$event'])
  slideToNext(event: Event) {
    console.log(event);
  }

  constructor(private el: ElementRef<any>) {}

  @HostBinding('style.color') @Input() color = 'red';
  @HostBinding('style.color') get bgColor() {
    return 'orange';
  }
}

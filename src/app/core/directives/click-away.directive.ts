import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appClickAway]',
})
export class ClickAwayDirective {
  constructor(private element: ElementRef) {
    element.nativeElement.style.color = 'red';
  }
}

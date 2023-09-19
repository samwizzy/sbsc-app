import { ElementRef } from '@angular/core';
import { ClickAwayDirective } from './click-away.directive';

describe('ClickAwayDirective', () => {
  let elementRef: ElementRef<any> = {
    nativeElement: HTMLElement,
  };

  it('should create an instance', () => {
    const directive = new ClickAwayDirective(elementRef);
    expect(directive).toBeTruthy();
  });
});

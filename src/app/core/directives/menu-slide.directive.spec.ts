import { ElementRef } from '@angular/core';
import { MenuSlideDirective } from './menu-slide.directive';

describe('MenuSlideDirective', () => {
  it('should create an instance', () => {
    const elementRef: ElementRef = jasmine.createSpyObj('elementRef', { nativeElement: null });

    const directive = new MenuSlideDirective(elementRef);
    expect(directive).toBeTruthy();
  });
});

import { ElementRef, TemplateRef, ViewContainerRef } from '@angular/core';
import { RatingDirective } from './rating.directive';

describe('RatingDirective', () => {
  it('should create an instance', () => {
    const templateRef: TemplateRef<any> = jasmine.createSpyObj('templateRef', {});
    const viewContainerRef: ViewContainerRef = jasmine.createSpyObj('viewContainerRef', {});

    const directive = new RatingDirective(templateRef, viewContainerRef);
    expect(directive).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { RhombusShapeResolver } from './rhombus-shape.resolver';

describe('RhombusShapeResolver', () => {
  let resolver: RhombusShapeResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(RhombusShapeResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});

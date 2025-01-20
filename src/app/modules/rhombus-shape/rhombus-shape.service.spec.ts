import { TestBed } from '@angular/core/testing';

import { RhombusShapeService } from './rhombus-shape.service';

describe('RhombusShapeService', () => {
  let service: RhombusShapeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RhombusShapeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

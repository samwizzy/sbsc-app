import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RhombusShapeComponent } from './rhombus-shape.component';

describe('RhombusShapeComponent', () => {
  let component: RhombusShapeComponent;
  let fixture: ComponentFixture<RhombusShapeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RhombusShapeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RhombusShapeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

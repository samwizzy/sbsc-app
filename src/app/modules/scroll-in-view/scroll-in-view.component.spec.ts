import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollInViewComponent } from './scroll-in-view.component';

describe('ScrollInViewComponent', () => {
  let component: ScrollInViewComponent;
  let fixture: ComponentFixture<ScrollInViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScrollInViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScrollInViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

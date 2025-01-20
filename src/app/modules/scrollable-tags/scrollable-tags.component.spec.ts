import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollableTagsComponent } from './scrollable-tags.component';

describe('ScrollableTagsComponent', () => {
  let component: ScrollableTagsComponent;
  let fixture: ComponentFixture<ScrollableTagsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScrollableTagsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScrollableTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

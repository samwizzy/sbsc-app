import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentPlaceComponent } from './content-place.component';

describe('ContentPlaceComponent', () => {
  let component: ContentPlaceComponent;
  let fixture: ComponentFixture<ContentPlaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentPlaceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentPlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

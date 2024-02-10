import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgformTestComponent } from './ngform-test.component';

describe('NgformTestComponent', () => {
  let component: NgformTestComponent;
  let fixture: ComponentFixture<NgformTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgformTestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgformTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

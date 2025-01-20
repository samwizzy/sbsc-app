import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DomPracticeComponent } from './dom-practice.component';

describe('DomPracticeComponent', () => {
  let component: DomPracticeComponent;
  let fixture: ComponentFixture<DomPracticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DomPracticeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DomPracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

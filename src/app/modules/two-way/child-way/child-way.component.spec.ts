import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildWayComponent } from './child-way.component';

describe('ChildWayComponent', () => {
  let component: ChildWayComponent;
  let fixture: ComponentFixture<ChildWayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildWayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildWayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

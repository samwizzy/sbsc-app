import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionGroupComponent } from './condition-group.component';

describe('ConditionGroupComponent', () => {
  let component: ConditionGroupComponent;
  let fixture: ComponentFixture<ConditionGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConditionGroupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConditionGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

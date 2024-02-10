import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionsTemplateComponent } from './conditions-template.component';

describe('ConditionsTemplateComponent', () => {
  let component: ConditionsTemplateComponent;
  let fixture: ComponentFixture<ConditionsTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConditionsTemplateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConditionsTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragdropComponent } from './dragdrop.component';
import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';

describe('DragdropComponent', () => {
  let component: DragdropComponent;
  let fixture: ComponentFixture<DragdropComponent>;
  let de: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DragdropComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(DragdropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have paragragh', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;

    const textEl = compiled.querySelector('.voltron');

    expect(textEl?.textContent).toContain('I am Samuel');
  });
});

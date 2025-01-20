import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepositionComponent } from './reposition.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('RepositionComponent', () => {
  let component: RepositionComponent;
  let fixture: ComponentFixture<RepositionComponent>;
  let de: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RepositionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RepositionComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return truthy', () => {
    const length = component.list?.length;
    expect(length).toEqual(4);
  });

  it('should return list items', () => {
    const items = component.itemsRef.length;

    expect(items).toEqual(4);
  });

  it('should return list', () => {
    const els = de.queryAll(By.css('.cursor-move')).length;

    expect(els).toEqual(4);
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextComponent } from './text.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('TextComponent', () => {
  let component: TextComponent;
  let fixture: ComponentFixture<TextComponent>;
  let de: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TextComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TextComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the text peace', () => {
    const el = de.query(By.css('.text')).nativeElement as HTMLElement;

    const el1 = fixture.nativeElement.querySelector('.text');

    expect(el.textContent).toBe('Hello');
    expect(el1.textContent).toBe('Hello');
  });
});

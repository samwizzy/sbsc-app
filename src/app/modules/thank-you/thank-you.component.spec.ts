import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThankYouComponent } from './thank-you.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatIconModule } from '@angular/material/icon';
import { FontawesomeIconsModule } from 'src/app/shared/fontawesome-icons/fontawesome-icons.module';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('ThankYouComponent', () => {
  let component: ThankYouComponent;
  let fixture: ComponentFixture<ThankYouComponent>;
  let de: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        MatIconModule,
        FontawesomeIconsModule,
      ],
      declarations: [ThankYouComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThankYouComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have button', () => {
    // arrange
    const btnEl = de.query(By.css('.btn')).nativeElement as HTMLButtonElement;

    // act
    btnEl.click();

    // assert
    expect(component.title).toBe('Hello world');
  });
});

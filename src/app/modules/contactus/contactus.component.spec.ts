import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactusComponent } from './contactus.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatIconModule } from '@angular/material/icon';
import { TableComponent } from 'src/app/shared/components/table/table.component';
import { FontawesomeIconsModule } from 'src/app/shared/fontawesome-icons/fontawesome-icons.module';
import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('ContactusComponent', () => {
  let component: ContactusComponent;
  let fixture: ComponentFixture<ContactusComponent>;
  let de: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        MatIconModule,
        FontawesomeIconsModule,
        ReactiveFormsModule,
        FormsModule,
      ],
      declarations: [ContactusComponent, TableComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactusComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should test input', () => {
    const emailInput = de.query(By.css("[data-testid='email']")).nativeElement as HTMLInputElement;

    // console.log(emailInput, "emailInput");
    component.contactForm.patchValue({});

    expect(emailInput.value).toBe('');
  });
});

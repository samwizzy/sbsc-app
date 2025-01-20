import { ComponentFixture, fakeAsync, TestBed, tick, waitForAsync } from '@angular/core/testing';

import { Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { QuickstyleComponent } from './quickstyle.component';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('QuickstyleComponent', () => {
  let component: QuickstyleComponent;
  let fixture: ComponentFixture<QuickstyleComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QuickstyleComponent],
      imports: [
        BrowserAnimationsModule,
        ReactiveFormsModule,
        RouterTestingModule,
        FormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(QuickstyleComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update icon', () => {
    const el = fixture.debugElement.query(By.css('.icon img')).nativeElement as HTMLImageElement;
    const btns = fixture.debugElement.queryAll(By.css('button[mat-flat-button]'));

    btns.at(0)?.nativeElement.click();

    expect(el.src).toContain('assets/images/instagram.svg');
  });

  it('should have a mode query params', () => {
    const spy = spyOn(router, 'navigateByUrl');

    // fixture.debugElement.query(By.css('button.btn-resizable')).triggerEventHandler('click', null);
    const btn = fixture.debugElement.query(By.css('button.btn-resizable')).nativeElement;

    btn.click();

    const args = spy.calls.first().args[0];

    expect(args)
      .withContext('Click me')
      .toMatch(/\?mode=5/);
  });

  it('should update address input field', () => {
    const inputEl = fixture.debugElement.query(By.css('[data-testid="input"]'))
      .nativeElement as HTMLInputElement;

    inputEl.dispatchEvent(new Event('input'));

    component.address.setValue('Lioness');
    expect(inputEl.value).toBe('Lioness');
  });

  it('should update city input field', waitForAsync(() => {
    const inputText = 'Lioness';
    const inputEl = fixture.debugElement.query(By.css('[data-testid="city"]')).nativeElement;
    const cityEl = fixture.debugElement.query(By.css('p.city')).nativeElement;

    component.city = inputText;

    fixture.whenStable().then(() => {
      fixture.detectChanges();

      expect(inputEl.value).toBe(inputText);
      expect(cityEl.textContent).toBe(inputText);
    });
  }));

  it('should that data returns', fakeAsync(() => {
    let data: any;

    component.getServerData().then((value) => {
      data = value;
    });

    tick(4000);

    expect(data).toBe('Samuel');
  }));

  it('should return server data', waitForAsync(() => {
    spyOn(component, 'getTitle');
    const title = 'Samuelss';
    // const btnEl = fixture.debugElement.query(By.css('.btn-async')).nativeElement;
    const btnEl = fixture.debugElement.query(By.css('.btn-async'));
    btnEl.triggerEventHandler('click', null);

    fixture.detectChanges();

    // btnEl.click();

    fixture.whenStable().then(() => {
      fixture.detectChanges();

      expect(component.title).toBe(title);
      expect(component.getTitle).toHaveBeenCalled();
    });
  }));
});

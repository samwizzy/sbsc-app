import { Component, Directive, ViewChild } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, NgForm } from '@angular/forms';

function passwordMatcher(c: AbstractControl) {
  if (!c.get('password')?.value || !c.get('confirm')?.value) return null;

  if (c.get('password')?.value === c.get('confirm')?.value) {
    return null;
  } else {
    return { nomatch: true };
  }
}

@Directive({
  selector: '[password-matcher]',
  providers: [{ provide: NG_VALIDATORS, useValue: passwordMatcher, multi: true }],
})
export class PasswordCheckDirective {}

@Component({
  selector: 'app-ngform-test',
  templateUrl: './ngform-test.component.html',
  styleUrls: ['./ngform-test.component.scss'],
})
export class NgformTestComponent {
  @ViewChild('form') form!: NgForm;

  /**
   * to use an arbitrary object,
   * you will use ([ngModel])='model.name',
   * otherwise, the form will generate an
   * object for you with just ngModel and name attrs.
   */
  model = {
    name: '',
    email: '',
    address: {
      state: '',
      country: '',
    },
    account: {
      password: '',
      confirm: '',
    },
  };

  onSubmit(f: NgForm) {
    console.log(this.model);

    console.log(this.form);

    console.log(f.value);
  }
}

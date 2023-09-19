import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.scss'],
})
export class BillingComponent {
  form!: FormGroup;
  plans = [
    { name: 'Basic' },
    { name: 'Enterprise' },
    { name: 'Professional' },
    { name: 'Premium' },
  ];

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.createForm();
  }

  get controls() {
    return this.form.controls;
  }

  createForm() {
    this.form = this.fb.group({
      personal: {
        phone: ['', Validators.required],
        email: ['', Validators.required],
      },
      account: {
        name: ['', Validators.required],
        number: ['', Validators.required],
        token: ['', Validators.required],
        cvv: ['', Validators.required],
      },
      plan: ['', Validators.required],
      country: ['', Validators.required],
    });
  }

  onSubmit(event: any) {
    console.log(this.form.value);
    this.router.navigate(['billing']);
  }
}

import { Component, Input, inject } from '@angular/core';
import { ControlContainer, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-billing-form',
  templateUrl: './billing-form.component.html',
  styleUrls: ['./billing-form.component.scss'],
  viewProviders: [
    { provide: ControlContainer, useFactory: () => inject(ControlContainer, { skipSelf: true }) },
  ],
})
export class BillingFormComponent {
  @Input() controlKey: string = '';
  @Input() label: string = '';

  parentContainer = inject(ControlContainer);

  ngOnInit() {
    this.parentFormGroup.addControl(
      this.controlKey,
      new FormGroup({
        street: new FormControl(''),
        city: new FormControl(''),
        state: new FormControl(''),
        country: new FormControl(''),
      })
    );
  }

  get parentFormGroup() {
    return this.parentContainer.control as FormGroup;
  }
}

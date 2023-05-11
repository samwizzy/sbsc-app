import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-longform',
  templateUrl: './longform.component.html',
  styleUrls: ['./longform.component.scss'],
})
export class LongformComponent implements OnInit {
  ownerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    @Inject(DOCUMENT) private doc: Document
  ) {
    this.ownerForm = this.fb.group({
      firstName: this.fb.control(''),
      lastName: this.fb.control(''),
      address: this.fb.array([
        this.fb.group({
          state: this.fb.control(''),
          city: this.fb.control(''),
          name: this.fb.control(''),
        }),
      ]),
    });
  }

  ngOnInit(): void {}

  get getAddresses() {
    return this.ownerForm.get('address') as FormArray;
  }

  submitForm() {
    console.log(this.ownerForm.value);
  }

  switchTheme() {
    let rootEl = this.doc.querySelector(':root') as HTMLElement;

    if (rootEl.classList.contains('dark')) {
      console.log('contains');
      rootEl.classList.remove('dark');
    } else {
      console.log('not contains');
      rootEl.classList.add('dark');
    }
  }
}

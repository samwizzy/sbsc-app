import { Component, Inject, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { animate, style, transition, trigger } from '@angular/animations';
import { SideModalComponent } from '../side-modal/side-modal.component';

@Component({
  selector: 'app-longform',
  templateUrl: './longform.component.html',
  styleUrls: ['./longform.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1s cubic-bezier(0.8,0.3,0,1)', style({ opacity: 1 })),
      ]),
      transition(':leave', [animate('1s', style({ opacity: 0 }))]),
    ]),
  ],
})
export class LongformComponent implements OnInit {
  ownerForm: FormGroup;

  @ViewChild('sidepaneOutlet', { read: ViewContainerRef }) sidepaneOutlet!: ViewContainerRef;

  constructor(private fb: FormBuilder, @Inject(DOCUMENT) private doc: Document) {
    this.ownerForm = this.fb.group({
      firstName: this.fb.control(''),
      lastName: this.fb.control(''),
      address: this.fb.array([this.createAddrGroup()]),
    });
  }

  ngOnInit(): void {
    this.ownerForm.get('firstName')?.valueChanges.subscribe((value) => {
      console.log('first name ha changed to ' + value);
    });
  }

  get getAddresses() {
    return this.ownerForm.get('address') as FormArray;
  }

  addAddress() {
    this.getAddresses.push(this.createAddrGroup());
  }

  remove(i: number) {
    this.getAddresses.removeAt(i);
  }

  createAddrGroup() {
    return this.fb.group({
      state: this.fb.control(''),
      city: this.fb.control(''),
      name: this.fb.control(''),
    });
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

  openModal() {
    this.sidepaneOutlet.clear();

    const componentRef = this.sidepaneOutlet.createComponent(SideModalComponent);

    componentRef.instance.closeEvent.subscribe(() => {
      // this.sidepaneOutlet.clear();
      componentRef.destroy();
    });

    componentRef.hostView.detectChanges();
    // componentRef.instance.data = 'Samuel';
    componentRef.setInput('data', 'Samuel');
  }
}

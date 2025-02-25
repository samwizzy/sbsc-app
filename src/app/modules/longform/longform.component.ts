import {
  AfterViewInit,
  Component,
  Inject,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
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
export class LongformComponent implements OnInit, AfterViewInit, OnChanges {
  ownerForm: FormGroup;
  currentOwner = {
    firstName: 'Samuel',
    lastName: 'Webber',
  };
  isActive = false;
  boolValue = false;

  @ViewChild('sidepaneOutlet', { read: ViewContainerRef }) sidepaneOutlet!: ViewContainerRef;

  constructor(private fb: FormBuilder, @Inject(DOCUMENT) private doc: Document) {
    this.ownerForm = this.fb.group({
      firstName: this.fb.control(''),
      lastName: this.fb.control(''),
      address: this.fb.array([this.createAddrGroup()]),
      escalations: this.fb.array([
        this.fb.group({
          name: [],
          desscription: [null],
          contacts: this.fb.array([
            this.fb.group({ id: [], name: [null] }),
            this.fb.group({ id: [], name: [null] }),
            this.fb.group({ id: [], name: [null] }),
            this.fb.group({ id: [], name: [null] }),
            this.fb.group({ id: [], name: [null] }),
          ]),
        }),
      ]),
    });
  }

  get escalations() {
    return this.ownerForm.get('escalations') as FormArray;
  }

  contacts(index: number) {
    return this.escalations.controls[index].get('contacts') as FormArray;
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.isActive = !this.isActive;
  }

  ngAfterViewInit(): void {
    setInterval(() => {
      this.isActive = !this.isActive;
    }, 3000);
  }

  ngOnInit(): void {
    console.log(this.ownerForm.value);
    this.ownerForm.get('firstName')?.valueChanges.subscribe((value) => {
      // console.log('first name ha changed to ' + value);
    });

    this.ownerForm.valueChanges.subscribe((value) => {
      // console.log(value, 'form values');
    });

    this.contacts(1).push(this.fb.group({ id: 8, name: '' }));
  }

  updateBoolVariable(event: Event) {
    console.log(event, 'event');
  }

  get getAddresses() {
    return this.ownerForm.get('address') as FormArray;
  }

  patchForm() {
    this.ownerForm.patchValue({
      firstName: this.currentOwner.firstName,
      lastName: this.currentOwner.lastName,
    });
  }

  addAddress() {
    this.getAddresses.push(this.createAddrGroup());
  }

  remove(i: number) {
    this.getAddresses.removeAt(i);
  }

  createAddrGroup() {
    return this.fb.group({
      state: this.fb.control('', Validators.required),
      city: this.fb.control('', Validators.required),
      name: this.fb.control(''),
      active: false,
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

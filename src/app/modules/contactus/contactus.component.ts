import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { SeoService } from 'src/app/core/services/seo.service';
import { ContactUsStore } from './contactus.store';

interface User {
  title: string;
  description: string;
}

const meta = {
  title: 'SBSC | My Contact Us',
  description:
    'Lets help you create that bespoke application, find us here or call us for any assistance.',
};

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss'],
  providers: [ContactUsStore],
})
export class ContactusComponent implements OnInit {
  email = 'sam@gmail.com';
  vm$ = this.contactStore.vm$;
  contactForm: FormGroup = this.fb.nonNullable.group({
    fullName: this.fb.control(''),
    email: this.fb.control(''),
    address: this.fb.control(''),
    clauses: this.fb.group({
      start: ['Samuel'],
    }),
  });

  @Input() data!: User[];

  constructor(
    private fb: FormBuilder,
    private seo: SeoService,
    private contactStore: ContactUsStore
  ) {}

  ngOnInit(): void {
    this.seo.setMetaTags(meta);
  }

  get clauseStart() {
    return this.contactForm.get('clauses.start') as FormControl;
  }

  employees = [
    { fullName: 'Samuel', email: 'samwize@gmail.com' },
    { fullName: 'David', email: 'david@gmail.com' },
    { fullName: 'Michael', email: 'michael@gmail.com' },
    { fullName: 'Collins', email: 'collins@gmail.com' },
    { fullName: 'Abraham', email: 'abraham@gmail.com' },
    { fullName: 'Rogers', email: 'rogers@gmail.com' },
  ];

  removeCard() {
    const cardEl = document.querySelector('app-card');
    cardEl?.classList.add('hidden');
  }
}

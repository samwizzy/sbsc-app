import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { from } from 'rxjs';

interface Collection {
  id: number;
  name: string;
  description: string;
  folders: { name: string }[];
}

@Component({
  selector: 'app-quickstyle',
  templateUrl: './quickstyle.component.html',
  styleUrls: ['./quickstyle.component.scss'],
})
export class QuickstyleComponent implements OnInit {
  selectedCollection: Partial<Collection> = { id: 2 };
  apiCollections = [
    {
      id: 1,
      name: 'Legal API Document',
      description: 'API 1 description',
      folders: [
        { name: 'Welcome onboard' },
        { name: 'Flowmono files' },
        { name: 'Flowmono files' },
      ],
    },
  ];
  address = new FormControl('');
  city = '';
  show = false;
  title: any;

  ngOnInit(): void {
    from(this.getServerData()).subscribe((data) => {
      // console.log(data);
    });
  }

  selectCollection(collection: any): void {
    this.selectedCollection = collection;
  }

  getServerData() {
    return new Promise((resolve) => setTimeout(() => resolve('Samuel'), 3000));
  }

  getTitle() {
    from(this.getServerData()).subscribe((value) => (this.title = value));
  }

  updateIcon() {
    this.show = true;
    const iconEl = document.querySelector('.icon img');

    const icon = `assets/images/instagram.svg`;

    if (iconEl) {
      iconEl.setAttribute('src', icon);
    }
  }

  submit() {
    return this.address.value;
  }
}

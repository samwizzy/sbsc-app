import { Component } from '@angular/core';

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
export class QuickstyleComponent {
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
  show = false;

  selectCollection(collection: any): void {
    this.selectedCollection = collection;
  }

  updateIcon() {
    this.show = true;
    const iconEl = document.querySelector('.icon img');

    const icon = `assets/images/instagram.svg`;

    if (iconEl) {
      iconEl.setAttribute('src', icon);

      // eslint-disable-next-line no-console
      console.log(icon, 'icon');
      // eslint-disable-next-line no-console
      console.log(iconEl, 'httpIcon');
    }
  }
}

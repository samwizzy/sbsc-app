import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class SeoService {
  constructor(private title: Title, private meta: Meta) {}

  setMetaTags(meta: any) {
    this.title.setTitle(meta.title);
    this.meta.addTags([
      { name: 'title', content: meta.title },
      { name: 'og:title', content: meta.title },
      { name: 'description', content: meta.description },
      { name: 'og:description', content: meta.description },
    ]);
  }
}

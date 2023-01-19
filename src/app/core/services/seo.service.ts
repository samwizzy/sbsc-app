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
      { name: 'robots', content: `index,follow` },
      { name: 'keywords', content: this.generateKeywords(meta.title) },
      { name: 'og:title', content: meta.title },
      { name: 'description', content: meta.description },
      { name: 'og:description', content: meta.description },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ]);
  }

  generateKeywords(title: string) {
    const cleanStr = title.replace(/(\s+)([^a-z])/gi, '');
    return cleanStr.split(' ').join(', ');
  }
}

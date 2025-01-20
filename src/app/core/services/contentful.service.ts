import { Injectable } from '@angular/core';

import { createClient, Entry } from 'contentful';

const CONFIG = {
  space: 'byel0fvyzzmf',
  accessToken: 'L50iTTVIb9uBhJLZejBONGfkrsCmg4IoeGWpzGTmFNQ',

  contentTypeIds: {
    project: 'projects',
  },
};

@Injectable()
export class ContentfulService {
  private cdaClient = createClient({
    space: CONFIG.space,
    accessToken: CONFIG.accessToken,
  });

  constructor() {}

  getProducts(query?: object): Promise<Entry<any>[]> {
    return this.cdaClient
      .getEntries(
        Object.assign(
          {
            content_type: CONFIG.contentTypeIds.project,
          },
          query
        )
      )
      .then((res) => res.items);
  }
}

/**
 * IF YOU ARE USING ANGULAR ^16, you can install contentful v11.0.3,
 * version 9.3.7 was used in this project because of the typescript
 * used in angular 15.
 *
 * contentful v11.0.3 uses typescript >5
 * contentful v9.3.7  uses typescript <5
 */

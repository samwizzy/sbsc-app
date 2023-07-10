import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UtilService {
  constructor() {}

  exportToJSON() {
    let data = JSON.stringify({
      user: { name: 'Samuel', email: 'sam@gmail.com' },
    });
    let dataUri =
      'data:application/json;charset=utf-8,' + encodeURIComponent(data);

    let a = document.createElement('a');
    a.setAttribute('href', dataUri);
    a.setAttribute('download', 'file.json');
    a.click();
  }
}

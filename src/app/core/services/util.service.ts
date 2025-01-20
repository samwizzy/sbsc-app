import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UtilService {
  constructor() {}

  exportToJSON() {
    const data = JSON.stringify({
      user: { name: 'Samuel', email: 'sam@gmail.com' },
    });

    const dataUri = 'data:application/json;charset=utf-8,' + encodeURIComponent(data);

    const a = document.createElement('a');
    a.setAttribute('href', dataUri);
    a.setAttribute('download', 'file.json');
    a.click();
  }

  parseJwt = (userToken: string) => {
    const base64Url = userToken.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split('')
        .map(function (c) {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join('')
    );

    return JSON.parse(jsonPayload);
  };
}

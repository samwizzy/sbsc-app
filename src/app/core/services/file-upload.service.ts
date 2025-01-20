import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs';

const headers = new HttpHeaders().set('content-type', 'application/json');

@Injectable({
  providedIn: 'root',
})
export class FileUploadService {
  constructor(private http: HttpClient) {}

  /**
   *
   * @param file base64
   */
  uploadFile(file: string) {
    const url = `https://api.escuelajs.co/api/v1/files/upload`;

    return this.http.post(
      url,
      { file },
      {
        responseType: 'blob',
        reportProgress: true,
        observe: 'events',
        headers: headers,
      }
    );
  }

  getDocBlob(url: string) {
    this.http.get(url, { responseType: 'blob' }).pipe(
      map((response) => response),
      tap((blob) => {
        const url = URL.createObjectURL(blob);
        const docElem = document.createElement('a');

        docElem.href = url;
        docElem.download = `${blob.text}`;
        document.body.appendChild(docElem);

        docElem.click();

        document.body.removeChild(docElem);
        URL.revokeObjectURL(url);
      })
    );
  }

  /**
   * experimental data type modification
   */
  blobToUrl() {
    const blob = new Blob(['Hello World'], { type: 'text/plain' });

    const url = URL.createObjectURL(blob);

    return url;
  }
}

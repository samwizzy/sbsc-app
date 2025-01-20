import { Injectable } from '@angular/core';
import { loadGapiInsideDOM } from 'gapi-script';

declare const gapi: any;

@Injectable({
  providedIn: 'root',
})
export class GoogleDriveService {
  CLIENT_ID = '703208215844-nomc095ceckj2i05oovtti1ijn1cc614.apps.googleusercontent.com';
  API_KEY = 'AIzaSyC-lo2ZCrUHbipKGf9znclnHbrn4tqIwMg';
  DISCOVERY_DOCS = ['https://www.googleapis.com/discovery/v1/apis/drive/v3/rest'];
  SCOPES = 'https://www.googleapis.com/auth/drive.readonly';
  SCOPES1 = 'https://www.googleapis.com/auth/drive.metadata.readonly';

  constructor() {
    this.initClient();
  }

  initClient() {
    loadGapiInsideDOM().then(() => {
      gapi.load('client:auth2', () => {
        gapi.client
          .init({
            apiKey: this.API_KEY,
            clientId: this.CLIENT_ID,
            discoveryDocs: this.DISCOVERY_DOCS,
            scope: this.SCOPES,
          })
          .then(() => {
            // After initializing the API, handle login
            gapi.auth2
              .getAuthInstance()
              .signIn()
              .then(() => {
                console.log('trying to read files..');
                this.listFiles();
              });
          });
      });
    });
  }

  // Upload file to Google Drive
  uploadFile(file: File) {
    const metadata = {
      name: file.name,
      mimeType: file.type,
    };

    const accessToken = gapi.auth2
      .getAuthInstance()
      .currentUser.get()
      .getAuthResponse().access_token;
    const form = new FormData();
    form.append('metadata', new Blob([JSON.stringify(metadata)], { type: 'application/json' }));
    form.append('file', file);

    fetch('https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart', {
      method: 'POST',
      headers: new Headers({ Authorization: 'Bearer ' + accessToken }),
      body: form,
    })
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        console.log('File uploaded successfully:', result);
      })
      .catch((error) => {
        console.error('Error uploading file:', error);
      });
  }

  signIn() {
    return gapi.auth2.getAuthInstance().signIn();
  }

  signOut() {
    return gapi.auth2.getAuthInstance().signOut();
  }

  // Fetch files from Google Drive
  listFiles() {
    return gapi.client.drive.files
      .list({
        pageSize: 10,
        fields: 'nextPageToken, files(id, name)',
      })
      .then((response: any) => {
        console.log(response.result.files);
        return response.result.files;
      })
      .catch((error: any) => {
        console.error('Error fetching files:', error);
      });
  }
}

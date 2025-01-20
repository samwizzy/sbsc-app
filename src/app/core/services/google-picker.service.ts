import { Injectable } from '@angular/core';

declare const gapi: any; // Declare gapi to avoid TypeScript errors
declare var google: any;

@Injectable({
  providedIn: 'root',
})
export class GooglePickerService {
  developerKey = 'AIzaSyC-lo2ZCrUHbipKGf9znclnHbrn4tqIwMg'; // Replace with your Developer Key
  clientId = '703208215844-nomc095ceckj2i05oovtti1ijn1cc614.apps.googleusercontent.com'; // Replace with your OAuth2 client ID
  scope = ['https://www.googleapis.com/auth/drive.file'];
  pickerApiLoaded = false;
  oauthToken: string | undefined;

  constructor() {}

  // Load Google APIs (Auth and Picker)
  loadGoogleApi() {
    return new Promise<void>((resolve, reject) => {
      gapi.load('auth', { callback: this.onAuthApiLoad.bind(this, resolve, reject) });
      gapi.load('picker', { callback: this.onPickerApiLoad.bind(this) });
    });
  }

  // Auth API load callback
  private onAuthApiLoad(resolve: () => void, reject: (error: any) => void) {
    gapi.auth.authorize(
      {
        client_id: this.clientId,
        scope: this.scope,
        immediate: false,
      },
      (authResult: any) => {
        if (authResult && !authResult.error) {
          console.log(authResult);
          this.oauthToken = authResult.access_token;
          resolve();
        } else {
          reject(authResult.error);
        }
      }
    );
  }

  // Picker API load callback
  private onPickerApiLoad() {
    this.pickerApiLoaded = true;
  }

  // Create and display the Google Picker
  createPicker(): void {
    if (this.pickerApiLoaded && this.oauthToken) {
      const picker = new gapi.picker.api.PickerBuilder()
        .addView(gapi.picker.api.ViewId.DOCS) // Docs view
        .setOAuthToken(this.oauthToken)
        .setDeveloperKey(this.developerKey)
        .setCallback(this.pickerCallback.bind(this))
        .build();
      picker.setVisible(true);
    } else {
      console.error('Picker API is not loaded or OAuth token is missing');
    }
  }

  // Picker callback
  private pickerCallback(data: any) {
    if (data.action === gapi.picker.api.Action.PICKED) {
      const fileId = data.docs[0].id;
      console.log('Selected File ID:', fileId);
      // Implement further actions, e.g., upload the file or retrieve file metadata
    }
  }

  // Public method to open the picker
  openPicker() {
    if (!this.pickerApiLoaded || !this.oauthToken) {
      this.loadGoogleApi()
        .then(() => {
          this.createPicker();
        })
        .catch((error) => {
          console.error('Error during OAuth or Picker API loading:', error);
        });
    } else {
      this.createPicker();
    }
  }
}

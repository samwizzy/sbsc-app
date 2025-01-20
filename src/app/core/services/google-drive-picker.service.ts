import { Injectable } from '@angular/core';

// Declare the `google` object globally to avoid TypeScript errors
declare var gapi: any;
declare var google: any;

@Injectable({
  providedIn: 'root',
})
export class GoogleDrivePickerService {
  developerKey = 'AIzaSyDjmkfeGHVAoRV3kEyJAB-Y-W2aaVoDURQ'; // Replace with your Developer Key
  clientId = '610117017856-18r92fp91q43hib4fjnt999i9u3968l5.apps.googleusercontent.com'; // Replace with your OAuth2 client ID

  private oauthToken: string | null = null;

  constructor() {
    this.initializeGoogleSignIn();
  }

  // Initialize Google Sign-In
  initializeGoogleSignIn() {
    google.accounts.id.initialize({
      client_id: this.clientId,  // Replace with your Client ID
      callback: this.handleCredentialResponse.bind(this)      // Set callback to handle user credentials
    });

    // Render the button or trigger authentication in another way
    google.accounts.id.prompt();  // Optionally, prompt the user
  }

  // Handle the credential response (when user signs in)
  handleCredentialResponse(response: any) {
    console.log('Encoded JWT ID token: ' + response.credential);
    
    // Exchange the token for an OAuth2 access token if needed
    this.exchangeTokenForOAuth(response.credential);
  }

  // Exchange the Google Identity token for OAuth access token (if needed)
  exchangeTokenForOAuth(idToken: string) {
    // Exchange the JWT token with Google's OAuth token endpoint
    // You need to use this step if your application requires OAuth2 scopes like Google Drive API.
    // You can use Google's token endpoint for this:
    //
    // POST to https://oauth2.googleapis.com/token with necessary parameters to obtain an OAuth token.
    // After obtaining OAuth token, proceed with using it in the Google Picker.
    
    // For simplicity, let's assume you obtain the OAuth token:
    this.oauthToken = 'OAUTH_ACCESS_TOKEN';
  }

  // Function to create and show the Picker
  onPickerApiLoad() {
    if (this.oauthToken) {
      const picker = new google.picker.PickerBuilder()
        .addView(google.picker.ViewId.DOCS)
        .setOAuthToken(this.oauthToken)
        .setDeveloperKey(this.developerKey)  // Replace with your API Key
        .setCallback(this.pickerCallback)
        .build();

      picker.setVisible(true);
    } else {
      console.error('OAuth token is not available');
    }
  }

  // Callback function for the Picker
  pickerCallback(data: any) {
    if (data[google.picker.Response.ACTION] === google.picker.Action.PICKED) {
      const file = data[google.picker.Response.DOCUMENTS][0];
      console.log('Picked file:', file);
    }
  }
}

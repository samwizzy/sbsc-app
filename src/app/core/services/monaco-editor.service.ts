import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MonacoEditorService {
  loaded: boolean = false;
  beautify = new Subject<void>();
  loadingFinished = new Subject<void>();

  constructor() {
    this.loadMonacoEditor();
  }

  loadMonacoEditor() {
    const baseUrl = `${window.location.origin}/assets/monaco/min/vs`;

    if (typeof (<any>window).monaco === 'object') {
      this.onLoadMonacoEditorFinished();
      return;
    }

    /**
     * load Monaco
     */
    const onGetAMDLoader = () => {
      (<any>window).require.config({ paths: { vs: `${baseUrl}` } });

      (<any>window).require(
        [`vs/editor/editor.main`],
        () => {
          this.onLoadMonacoEditorFinished();
        },
        (err: Error) => {
          console.error('Error loading Monaco Editor:', err);
        }
      );
    };

    /**
     * checks if the require library is present,
     * otherwise, run the onGetAMDLoader directly
     */
    if (!(<any>window).require) {
      const loaderScript: HTMLScriptElement = document.createElement('script');

      loaderScript.type = 'text/javascript';
      loaderScript.src = `${baseUrl}/loader.js`;

      loaderScript.addEventListener('load', onGetAMDLoader);

      document.body.appendChild(loaderScript);
    } else {
      onGetAMDLoader();
    }
  }

  onLoadMonacoEditorFinished() {
    this.loaded = true;
    this.loadingFinished.next();
  }
}

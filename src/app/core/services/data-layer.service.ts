import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataLayerService {
  // private window = <any>window;
  // constructor() {
  //   this.window = [];
  // }
  // private pingHome(obj: {}) {
  //   if (obj) this.window.dataLayer.push(obj);
  // }
  // //list of all our dataLayer methods
  // logPageView(url: string) {
  //   const hit = {
  //     event: 'content-view',
  //     pageName: url,
  //   };
  //   this.pingHome(hit);
  // }
  // logEvent(event: string, category: string, action: string, label: string) {
  //   const hit = {
  //     event: event,
  //     category: category,
  //     action: action,
  //     label: label,
  //   };
  //   this.pingHome(hit);
  // }
  // logCustomDimensionTest(value: string) {
  //   const hit = {
  //     event: 'custom-dimension',
  //     value: value,
  //   };
  //   this.pingHome(hit);
  // }
}

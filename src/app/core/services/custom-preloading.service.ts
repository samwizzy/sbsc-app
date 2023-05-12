import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CustomPreloadingService implements PreloadingStrategy {
  preload(route: Route, fn: () => Observable<any>): Observable<any> {
    if ((route.data as any).preload) {
      return fn();
    }
    return of(null);
  }
}

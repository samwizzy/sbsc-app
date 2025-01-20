import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpContextToken,
} from '@angular/common/http';
import { Observable, of, tap } from 'rxjs';

export const NO_CACHE = new HttpContextToken(() => false);

@Injectable()
export class CacheInterceptor implements HttpInterceptor {
  private cache = new Map<string, HttpResponse<any>>();

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (request.method !== 'GET') {
      return next.handle(request);
    }

    const cachedResponse = this.cache.get(request.urlWithParams);

    if (cachedResponse) {
      // Return cached response
      return of(cachedResponse.clone());
    }

    // Proceed with the request if no cache exists
    return next.handle(request).pipe(
      tap((event) => {
        if (event instanceof HttpResponse) {
          // Cache the response
          this.cache.set(request.urlWithParams, event.clone());
        }
      })
    );
  }
}

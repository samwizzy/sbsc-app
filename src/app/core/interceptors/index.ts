import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { CacheInterceptor } from './cache.interceptor';
import { AuthTokenInterceptor } from './auth-token.interceptor';

export const httpInterceptorProviders = [
  // { provide: HTTP_INTERCEPTORS, useClass: AuthTokenInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: CacheInterceptor, multi: true },
];

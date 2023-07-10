import { TestBed } from '@angular/core/testing';

import { AuthTokenInterceptor } from './auth-token.interceptor';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AuthTokenInterceptor', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      providers: [AuthTokenInterceptor],
    })
  );

  it('should be created', () => {
    const interceptor: AuthTokenInterceptor =
      TestBed.inject(AuthTokenInterceptor);
    expect(interceptor).toBeTruthy();
  });
});

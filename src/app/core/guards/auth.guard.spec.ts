import { TestBed } from '@angular/core/testing';

import { authGuard } from './auth.guard';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { SnackbarService } from '../services/snackbar.service';

describe('AuthGuard', () => {
  const routerSpy = jasmine.createSpyObj<Router>(['navigate']);
  routerSpy.navigate.and.resolveTo(true);

  const setup = (mockService: unknown, mockService2: unknown) => {
    TestBed.configureTestingModule({
      providers: [
        authGuard,
        { provide: Router, useValue: routerSpy },
        { provide: AuthService, useValue: mockService },
        { provide: SnackbarService, useValue: mockService2 },
      ],
    });

    return TestBed.runInInjectionContext(authGuard);
  };

  it('should be created', () => {
    const authServiceSpy = jasmine.createSpyObj<AuthService>(['getAuthToken']);

    const snackbarServiceSpy = jasmine.createSpyObj<SnackbarService>([
      'openSnackBar',
    ]);
    const guard = setup(authServiceSpy, snackbarServiceSpy);
    expect(guard).toBeFalsy();
  });
});

import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { SnackbarService } from '../services/snackbar.service';

// preventing access to app routes when unauthenticated
export const protectedGuard = () => {
  const router = inject(Router);
  const authService = inject(AuthService);
  const snackbarService = inject(SnackbarService);
  const token = authService.getAuthToken;

  if (!token) {
    snackbarService.openSnackBar('Session expired, kindly login');
    router.navigate(['login']);
    return false;
  }
  return true;
};

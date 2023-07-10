import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { SnackbarService } from '../services/snackbar.service';

export const protectedGuard = () => {
  const router = inject(Router);
  const authService = inject(AuthService);
  const snackbarService = inject(SnackbarService);
  const token = authService.getAuthToken;

  if (!token) {
    snackbarService.openSnackBar('Session expired, kindly login');
    router.navigate(['auth/login']);
    return false;
  }
  return true;
};

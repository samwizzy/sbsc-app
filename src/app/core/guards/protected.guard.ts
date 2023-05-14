import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { SnackbarService } from '../services/snackbar.service';

export const ProtectedGuard = () => {
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

// @Injectable({
//   providedIn: 'root',
// })
// export class ProtectedGuard implements CanActivate {
//   constructor(
//     private router: Router,
//     private authService: AuthService,
//    private snackbarService: SnackbarService
//    )
//   {}
//   canActivate(
//     route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot
//   ):
//     | Observable<boolean | UrlTree>
//     | Promise<boolean | UrlTree>
//     | boolean
//     | UrlTree {
//     const token = this.authService.getAuthToken || 'QpwL5tke4Pnpja7X4';

//     if (!token) {
//       this.snackbarService.openSnackBar('Session expired, kindly login');
//       this.router.navigate(['auth/login']);
//       return false;
//     }
//     return true;
//   }
// }

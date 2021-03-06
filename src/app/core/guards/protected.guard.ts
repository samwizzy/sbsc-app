import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { SnackbarService } from '../services/snackbar.service';

@Injectable({
  providedIn: 'root',
})
export class ProtectedGuard implements CanActivate {
  constructor(
    private router: Router,
    private authService: AuthService,
    private snackbarService: SnackbarService
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const token = this.authService.getAuthToken;

    if (!token) {
      this.snackbarService.openSnackBar('Session expired, kindly login');
      this.router.navigate(['auth/login']);
      return false;
    }
    return true;
  }
}

import { Injectable } from '@angular/core';
import * as moment from 'moment';
import {
  catchError,
  EMPTY,
  interval,
  Observable,
  of,
  switchMap,
  takeWhile,
  throwError,
} from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class CronService {
  constructor(private authService: AuthService) {}

  sessionCounter(): Observable<number | null> {
    return interval(1000).pipe(
      switchMap(() => {
        const expiresAt = Number(this.authService.getAuthTokenExpiresAt);
        const timestamp = moment(expiresAt).diff(moment());

        if (timestamp > -1) {
          return of(timestamp);
        }

        return throwError(() => new Error('time out'));
      }),
      takeWhile((val) => val > -1),
      catchError(() => {
        this.authService.logout();
        return EMPTY;
      })
    );
  }
}

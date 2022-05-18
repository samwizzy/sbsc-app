import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { UserData, userData } from 'src/app/core/models/user';
import { UserService } from 'src/app/core/services/user.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { AccountDialogComponent } from 'src/app/shared/components/account-dialog/account-dialog.component';
import {
  catchError,
  interval,
  map,
  of,
  switchMap,
  takeWhile,
  tap,
  throwError,
} from 'rxjs';
import * as moment from 'moment';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
})
export class AccountComponent implements OnInit {
  showMore: boolean = false;
  countDown: string = '0';
  account: UserData = userData;

  constructor(
    public dialog: MatDialog,
    private authService: AuthService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    const userId = this.authService.getAuthId;
    if (userId) {
      this.userService
        .getUserById(userId)
        .pipe(map((value) => value.data))
        .subscribe((data) => (this.account = data));
    }

    this.sessionCounter();
  }

  openDialog(account: UserData): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.data = account;

    const dialogRef = this.dialog.open(AccountDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe((result) => {});
  }

  sessionCounter(): void {
    interval(1000)
      .pipe(
        switchMap(() => {
          const expiresAt = Number(this.authService.getAuthTokenExpiresAt);
          const timestamp = moment(expiresAt).diff(moment());

          if (timestamp > -1) {
            this.countDown = moment(timestamp).format('mm:ss');
            return of(timestamp);
          }

          return throwError(() => new Error('time out'));
        }),
        takeWhile((val) => val > -1),
        catchError((val) => {
          this.authService.logout();
          return of(null);
        })
      )
      .subscribe();
  }
}

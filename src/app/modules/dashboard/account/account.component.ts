import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { UserData, userData } from 'src/app/core/models/user';
import { UserService } from 'src/app/core/services/user.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { AccountDialogComponent } from 'src/app/shared/components/account-dialog/account-dialog.component';
import { map } from 'rxjs';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
})
export class AccountComponent implements OnInit {
  showMore: boolean = false;
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
  }

  openDialog(account: UserData): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.data = account;

    const dialogRef = this.dialog.open(AccountDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(result, 'result');
    });
  }
}

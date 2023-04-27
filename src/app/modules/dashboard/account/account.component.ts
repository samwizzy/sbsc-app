import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { UserData, userData } from 'src/app/core/models/user';
import { UserService } from 'src/app/core/services/user.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { CronService } from 'src/app/core/services/cron.service';
import { AccountDialogComponent } from 'src/app/shared/components/account-dialog/account-dialog.component';
import { map } from 'rxjs';
import * as moment from 'moment';
import { SeoService } from 'src/app/core/services/seo.service';
import { ActivatedRoute } from '@angular/router';

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
    private activatedRoute: ActivatedRoute,
    public dialog: MatDialog,
    private authService: AuthService,
    private userService: UserService,
    private cronService: CronService,
    private seo: SeoService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((data) => {
      this.seo.setMetaTags(data);
    });

    const userId = this.authService.getAuthId;
    if (userId) {
      this.userService
        .getUserById(userId)
        .pipe(map((value) => value.data))
        .subscribe((data) => (this.account = data));
    }

    this.cronService
      .sessionCounter()
      .subscribe((value) => (this.countDown = moment(value).format('mm:ss')));
  }

  openDialog(account: UserData): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.data = account;

    const dialogRef = this.dialog.open(AccountDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe((result) => {});
  }
}

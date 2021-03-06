import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { UserData, userData } from 'src/app/core/models/user';
import { UserService } from 'src/app/core/services/user.service';
import { UserDialogComponent } from 'src/app/shared/components/user-dialog/user-dialog.component';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent implements OnInit {
  user: UserData = userData;
  showMore: boolean = false;

  constructor(
    private dialog: MatDialog,
    private route: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((param: any) => {
      this.userService
        .getUserById(param.id)
        .subscribe((response) => (this.user = response.data));
    });
  }

  openDialog(user: UserData): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.data = user;

    const dialogRef = this.dialog.open(UserDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe((result) => {});
  }

  deleteUser(user: UserData): void {
    this.userService
      .deleteUser(user.id)
      .subscribe((response) => console.log(response, 'response delete'));
  }
}

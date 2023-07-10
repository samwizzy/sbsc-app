import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { MatDialogConfig } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { UserData } from 'src/app/core/models/user';
import { UserService } from 'src/app/core/services/user.service';
import { MatDialog } from '@angular/material/dialog';
import { UserDialogComponent } from 'src/app/shared/components/user-dialog/user-dialog.component';
import { Router } from '@angular/router';
import { SeoService } from 'src/app/core/services/seo.service';

const meta = {
  title: 'SBSC | User List',
  description: 'All users that have created an account on the SBSC application',
};
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  users$: Observable<UserData[]> = this.userService.getAllUsers();

  constructor(
    private userService: UserService,
    private dialog: MatDialog,
    private router: Router,
    private location: Location,
    private seo: SeoService
  ) {}

  ngOnInit(): void {
    this.seo.setMetaTags(meta);
  }

  openDialog(user: UserData): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.data = user;

    const dialogRef = this.dialog.open(UserDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe((result) => {});
  }

  deleteUser(user: UserData): void {
    this.userService.deleteUser(user.id).subscribe((response) => {
      this.router.navigateByUrl('/dashboard/users');
    });
  }

  goBack() {
    this.location.back();
  }
}

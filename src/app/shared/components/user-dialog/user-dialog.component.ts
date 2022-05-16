import { Component, Inject, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserData } from 'src/app/core/models/user';
import { SnackbarService } from 'src/app/core/services/snackbar.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-user-dialog',
  templateUrl: './user-dialog.component.html',
  styleUrls: ['./user-dialog.component.scss'],
})
export class UserDialogComponent implements OnInit {
  ngForm!: FormGroup;
  submitted: boolean = false;

  constructor(
    private fb: FormBuilder,
    private snackbarService: SnackbarService,
    private userService: UserService,
    public dialogRef: MatDialogRef<UserDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: UserData
  ) {}

  ngOnInit(): void {
    this.initialForm();

    this.ngForm.setValue({
      email: this.data.email,
      first_name: this.data.first_name,
      last_name: this.data.last_name,
    });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.ngForm.controls;
  }

  initialForm() {
    this.ngForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      first_name: ['', [Validators.required, Validators.minLength(4)]],
      last_name: ['', [Validators.required, Validators.minLength(4)]],
    });
  }

  onSubmit(): void {
    if (this.data.id) {
      this.userService
        .updateUser(this.data.id, this.ngForm.value)
        .subscribe((response: any) => {
          this.snackbarService.openSnackBar(
            `User ${response?.first_name} was updated.`
          );
          this.onClose();
        });
    }
  }

  onClose(): void {
    this.dialogRef.close();
  }
}

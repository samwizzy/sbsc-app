import { Component, OnInit, Inject } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserData } from 'src/app/core/models/user';
import { UserService } from 'src/app/core/services/user.service';
import { SnackbarService } from 'src/app/core/services/snackbar.service';

@Component({
  selector: 'app-account-dialog',
  templateUrl: './account-dialog.component.html',
  styleUrls: ['./account-dialog.component.scss'],
})
export class AccountDialogComponent implements OnInit {
  ngForm!: FormGroup;
  submitted: boolean = false;

  constructor(
    private userService: UserService,
    private snackbarService: SnackbarService,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<AccountDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: UserData
  ) {}

  ngOnInit(): void {
    this.initialForm();

    if (this.data) {
      this.ngForm.patchValue({
        email: this.data.email,
        first_name: this.data.first_name,
        last_name: this.data.last_name,
      });
    }
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
    const id = this.data.id;
    if (id) {
      this.userService
        .updateUser(id, this.ngForm.value)
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

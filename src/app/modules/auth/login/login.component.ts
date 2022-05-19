import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { SnackbarService } from 'src/app/core/services/snackbar.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  ngForm!: FormGroup;
  submitted: boolean = false;
  showPassword: boolean = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private snackbarService: SnackbarService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  get f(): { [key: string]: AbstractControl } {
    return this.ngForm.controls;
  }

  initForm(): void {
    this.ngForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]],
    });
  }

  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }

  onSubmit() {
    this.submitted = true;
    this.authService.register(this.ngForm.value).subscribe({
      next: (response: any) => {
        if (response?.token) {
          this.snackbarService.openSnackBar('Login successful');
          this.router.navigateByUrl('dashboard');
          this.submitted = false;
        } else {
          this.snackbarService.openSnackBar(response?.message);
        }
      },
      error: () => {
        this.snackbarService.openSnackBar('Something went wrong');
      },
    });
  }
}

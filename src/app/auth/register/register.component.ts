import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  AbstractControlOptions,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { SeoService } from 'src/app/core/services/seo.service';
import { SnackbarService } from 'src/app/core/services/snackbar.service';

const meta = {
  title: 'SBSC | Sign up',
  description: 'Creating an account is now as easy as ever',
};
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  ngForm!: FormGroup;
  submitted: boolean = false;
  showPassword: boolean = false;
  showConfirmPassword: boolean = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private snackbarService: SnackbarService,
    private router: Router,
    private seo: SeoService
  ) {}

  ngOnInit(): void {
    this.seo.setMetaTags(meta);
    this.initForm();
  }

  get f(): { [key: string]: AbstractControl } {
    return this.ngForm.controls;
  }

  initForm(): void {
    this.ngForm = this.fb.group(
      {
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(4)]],
        confirm: ['', [Validators.required, Validators.minLength(4)]],
      },
      { validators: [this.validatePwd()] } as AbstractControlOptions
    );
  }

  validatePwd(): ValidationErrors | null {
    return (group: AbstractControl) => {
      if (!group.value.password || !group.value.confirm) return null;

      const errors = group.get('confirm')?.errors;

      if (group.value.password !== group.value.confirm) {
        group.get('confirm')?.setErrors({ ...errors, mismatch: true });

        return { invalidPwd: true };
      }

      return null;
    };
  }

  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }

  onSubmit() {
    this.submitted = true;
    this.authService.register(this.ngForm.value).subscribe({
      next: (response: any) => {
        if (response?.token) {
          this.snackbarService.openSnackBar('Registration successful');
          this.router.navigateByUrl('dashboard');
        } else {
          this.snackbarService.openSnackBar(response?.message);
        }
        this.submitted = false;
        this.ngForm.reset();
      },
      error: () => {
        this.snackbarService.openSnackBar('Something went wrong');
      },
    });
  }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
// import { MaterialModule } from '../material/material.module';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AccountDialogComponent } from './account-dialog/account-dialog.component';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { UserDialogComponent } from './user-dialog/user-dialog.component';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    AccountDialogComponent,
    SnackbarComponent,
    UserDialogComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
  ],
  exports: [NavbarComponent, FooterComponent],
})
export class ComponentsModule {}

import { Injectable } from '@angular/core';
import { MatSnackBarConfig, MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarComponent } from 'src/app/shared/components/snackbar/snackbar.component';

@Injectable({
  providedIn: 'root',
})
export class SnackbarService {
  constructor(private snackBar: MatSnackBar) {}

  openSnackBar(message: string) {
    const snackConfig = new MatSnackBarConfig();
    
    snackConfig.duration = 2000;
    snackConfig.verticalPosition = 'bottom';
    snackConfig.horizontalPosition = 'right';

    const snackRef = this.snackBar.open(message, 'Close', snackConfig);

    snackRef.afterDismissed().subscribe(() => {
      console.log('This will be shown after snackbar disappeared');
    });

    snackRef.onAction().subscribe(() => {
      console.log('This will be called when snackbar button clicked');
    });
  }

  openCustomSnackbar(message: string) {
    this.snackBar.openFromComponent(SnackbarComponent, {
      data: message,
      duration: 10000,
    });
  }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { TextFieldModule } from '@angular/cdk/text-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { MatBadgeModule } from '@angular/material/badge';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CdkDrag, CdkDropList } from '@angular/cdk/drag-drop';
import { MatRadioModule } from '@angular/material/radio';

const matModules = [
  MatButtonModule,
  TextFieldModule,
  MatInputModule,
  MatIconModule,
  MatBadgeModule,
  MatDialogModule,
  MatMenuModule,
  MatProgressSpinnerModule,
  MatSelectModule,
  MatRadioModule,
  CdkDropList,
  CdkDrag,
];

@NgModule({
  declarations: [],
  imports: [CommonModule, ...matModules],
  exports: [...matModules],
})
export class MaterialModule {}

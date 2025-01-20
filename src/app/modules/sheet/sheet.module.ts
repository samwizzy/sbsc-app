import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SheetComponent } from './sheet.component';
import { CdkConnectedOverlay, CdkOverlayOrigin, OverlayModule } from '@angular/cdk/overlay';
import { RouterModule, Routes } from '@angular/router';
import { PortalModule } from '@angular/cdk/portal';
import { DropdownComponent } from './dropdown/dropdown.component';

const routes: Routes = [{ path: '', component: SheetComponent }];

@NgModule({
  declarations: [SheetComponent, DropdownComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    OverlayModule,
    // CdkOverlayOrigin,
    // CdkConnectedOverlay,
    PortalModule,
  ],
})
export class SheetModule {}

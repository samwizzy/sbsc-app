import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CmEditorComponent } from './cm-editor.component';
import { RouterModule, Routes } from '@angular/router';
import { CodemirrorModule } from '@ctrl/ngx-codemirror';
import { FormsModule } from '@angular/forms';

const routes: Routes = [{ path: '', component: CmEditorComponent }];

@NgModule({
  declarations: [CmEditorComponent],
  imports: [CommonModule, RouterModule.forChild(routes), CodemirrorModule, FormsModule],
})
export class CmEditorModule {}

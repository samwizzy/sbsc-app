import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MonacoEditorComponent } from './monaco-editor.component';
import { RouterModule, Routes } from '@angular/router';
import { MonacoEditorModule as MonacoEditorModule2 } from 'ngx-monaco-editor-v2';
import { FormsModule } from '@angular/forms';

const routes: Routes = [{ path: '', component: MonacoEditorComponent }];

@NgModule({
  declarations: [MonacoEditorComponent],
  imports: [CommonModule, RouterModule.forChild(routes), MonacoEditorModule2, FormsModule],
})
export class MonacoEditorModule {}

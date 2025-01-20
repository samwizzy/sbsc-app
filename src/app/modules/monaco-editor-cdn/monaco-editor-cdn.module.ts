import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MonacoEditorCdnComponent } from './monaco-editor-cdn.component';
import { MonacoEditorDirective } from 'src/app/core/directives/monaco-editor.directive';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: MonacoEditorCdnComponent }];

@NgModule({
  declarations: [MonacoEditorCdnComponent, MonacoEditorDirective],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class MonacoEditorCdnModule {}
